import supertest from 'supertest'
import {app} from '../server/index'

describe('todo', ()=>{
    describe('get todos route', ()=>{
        describe('given no todos exist', ()=>{
            it('should return a 404', async()=>{
                const todos = 23;
                await supertest(app).get('/todos').expect(404);
            })
        })
    })


    describe('delete todos route', ()=>{
        describe('given todos exist', ()=>{
            it('should return a 200', async()=>{
                const todos = 23;
                await supertest(app).get('/todos').expect(404);
            })
        })
    })

})