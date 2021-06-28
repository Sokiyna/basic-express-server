
'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);
describe('server tests',()=>{
    test('bad route',async ()=>{
        const result = await request.get('/pppp');
        expect(result.status).toEqual(404);
    })
    test('bad method',async()=>{
        const result = await request.put('/person');
        expect(result.status).toEqual(404);
    })
    test('no name in query',async ()=>{
        const result = await request.get('/person');
        expect(result.status).toEqual(500);
    })
    test('name in query',async()=>{
        const result = await request.get('/person?name=tala');
        expect(result.status).toEqual(200);
    })
    test('expected succesful result',async()=>{
        const result = await request.get('/person?name=tala');
        console.log(result.body);
        expect(result.body).toEqual({name:'tala'})
    })
})