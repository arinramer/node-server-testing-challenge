const db = require('../data/dbConfig.js');

const request = require('supertest');

const Users = require('../users/model.js');
 
const server = require('../server.js');

beforeEach(async () => {
    await db('users').truncate();
})

describe('users model', () => {
    describe('add()', () => {
        it('should insert the provided users into the database', async () => {
            await Users.add({ username: 'testuser1', password: 'abc123' });
            await Users.add({ username: 'testuser2', password: 'abc123' });
            const users = await db('users');
            expect(users).toHaveLength(2);
        })
        it('should return status 201', async () => {
            await request(server).post('/api/users/register').send({ username: 'testuser', password: 'abc123' }).expect(201)
        })
    })
    describe('remove()', () => {
        it('should remove the user from the database', async () => {
            let users;
            await Users.add({ username: 'testuser', password: 'abc123' });
            users = await db('users');
            expect(users).toHaveLength(1);
            await Users.remove(1);
            users = await db('users');
            expect(users).toHaveLength(0);
        })
        it('should return status 200', async () => {
            await request(server).post('/api/users/register').send({ username: 'testuser', password: 'abc123' }).expect(201)
            await request(server).delete('/api/users/delete/1').expect(200)
        })
    })
})