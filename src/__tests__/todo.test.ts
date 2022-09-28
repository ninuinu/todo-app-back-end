import supertest from 'supertest'
import {app} from '../server'

describe('TODO', ()=> {
    // GET TODO ROUTE
    describe('get todos route', () => {
        describe('given todos exist', () => {
            it('should return a 200', async () => {
                await supertest(app).get('/todos').expect(200);
            })
        })
    })
    // DELETE TODO ROUTE
    describe('delete todos route', ()=>{
        describe('given incorrect id', ()=>{
            it('should return a 404', async()=>{
                const id = '123';
                await supertest(app).delete(`/todos/?id=${id}`).expect(404);
            })
        })
    })
    // CREATE TODO ROUTE
    describe('create todos route', ()=>{
        describe('given description string', ()=>{
            it('should return a 200', async()=>{
                const description = 'Buy milk';
                await supertest(app).post(`/todos/?description=${description}`).expect(200);
            })
        })
        describe('given empty string', ()=>{
            it('should return a 404', async()=>{
                const description = ' ';
                await supertest(app).post(`/todos/?description=${description}`).expect(404);
            })
        })

    })
})
