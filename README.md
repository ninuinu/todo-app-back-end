# Todo App

This is the backend code for a simple Todo App web application. The backend is a Node Express server written in Typescript that uses a MongoDB Atlas database. The app has been deployed to Heroku and can be accessed **[here](https://intense-lowlands-11377.herokuapp.com/)**.


![todo-app-2](https://user-images.githubusercontent.com/28160364/192612175-88d868d4-6643-4651-98b2-b22d4719946d.PNG)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode on port 8000.

### `npm run test`

Runs the test suite.

## Available Endpoints

The server supports three endpoints:

* `DELETE /todos/{id}` - delete a todo given an id
* `CREATE /todos/{description}` - delete a todo given a description
* `GET /todos` - get all todos

## Tech Stack

* Node Express server
* Typescript
* MondoDB Atlas database
* Jest for testing
* Sentry for logging
* Heroku for deployment
