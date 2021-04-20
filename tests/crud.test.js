const request = require('supertest')
const app = require('../app')
const db = require('../models')

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/items')
            .send({
                name: 'test item',
            })
        expect(res.statusCode).toEqual(201)
    })
});

describe('Update Endpoints', () => {
    it('should update a post', async () => {
        const res = await request(app)
            .put('/api/items/1')
            .send({
                name: 'update item',
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toStrictEqual("Item was updated successfully.")
    })
});

describe('Delete Endpoints', () => {
    it('should delete a post', async () => {
        const res = await request(app)
            .delete('/api/items/1')

        expect(res.statusCode).toEqual(200)
    })
})

afterAll(async ()=>{
    await db.sequelize.close()
})