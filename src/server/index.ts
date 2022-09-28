import express from 'express';
import router from '../api/routes';
import dotenv from 'dotenv';
import '../model/db';
import cors from 'cors';
import bodyParser from "body-parser";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import path from "path";

dotenv.config();

export const app = express()
app.use(express.static('public'))
app.use(bodyParser.json());

app.use(cors({
    origin: ["http://localhost:3000"]
}));

app.use('/', router);

Sentry.init({
    dsn: "https://3afa1f22256e48bda1e4e3b4c721c6cf@o1425867.ingest.sentry.io/6774464",
    // or pull from params
    // dsn: params.SENTRY_DSN,
    environment: process.env.INSTANCE_NAME,
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
    // or pull from params
    // tracesSampleRate: parseFloat(params.SENTRY_TRACES_SAMPLE_RATE),
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
    res.end("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err:any, req:any, res:any, next:any) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})