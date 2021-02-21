var expect  = require('chai').expect;
var request = require('supertest');
const app = require('../server')

afterEach(() => {
})

describe('Testing API', () => {
    let userEmailCreated;
    let userIdCreated;
    let postIdCreated;
    beforeEach(() => {
    });

    it('About page content', (done) => {
        request(app).get('/about')
            .then((res) => {
                const body = res.body
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('version');
                done();
            },)
            .catch((err) => done(err))
    })
    
    
    it('Add user', (done) => {
        request(app).post('/user')
            .send({ name: 'test', email:"test@hotmail.com"})
            .then((res) => {
                console.log(res.body)
                const user = res.body.result
                userEmailCreated = user.email;
                userIdCreated = user._id;
                expect(user).to.contain.property('_id');
                expect(user).to.contain.property('name');
                expect(user).to.contain.property('email');
                done();
            },)
            .catch((err) => done(err))
    })
    
    it('Find user', (done) => {
        request(app).get('/user/'+ userEmailCreated)
            .then((res) => {
                console.log("email", userEmailCreated);
                console.log("UPDATE", res.body)
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('Created a post', (done) => {
        request(app).post('/post')
            .send({
                author: userIdCreated,
                tittle:"Test Tittle",
                content : "content"
            }) 
            .then((res) => {
                const body = res.body
                postIdCreated = body.result._id;
                expect(body).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    
    it('Update post', (done) => {
        request(app).patch('/post/'+ postIdCreated)
            .send([{ propName: "content", value: "new content"}])
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('Add comment to a post', (done) => {
        request(app).post('/post/'+ postIdCreated)
            .send({
                author: "Test author",
                comment: "Test conent description"
            })
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('get all pending posts', (done) => {
        request(app).post('/posts')
        .send([{propName : "status", value: "PENDING"}])
        .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })
})

