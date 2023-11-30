const request = require('supertest');
const app = require('./server.js');

//describe is a good idea to group everything together nicely
//this means- when i make an https GET request to /todos i should get an array of objects containing a string as the name and a boolean as completed 
describe('Todos API', () => {
  it('GET /todos --> array todos', () => { 
    //simulate a fake request to test
    return request(app)
      .get('/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        //create assertion like this
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              completed: expect.any(Boolean)
            })
          ])
        );
      });
  });

  it('GET /todos/id --> specific todo by ID', () => { 
    return request(app)
      .get('/todos/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            completed: expect.any(Boolean)
          })
        )
      })
  });

  it('GET /todos/id --> 404 if not found', () => { 
    return request(app)
      .get('/todos/9999')
      .expect(404)
  });

  it('POST /todos --> created todo', () => { 
    return request(app)
      .post('/todos')
      .send({//will be request body
        name: 'do dishes'
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(response => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: 'do dishes',
            completed: false
          })
        );
      });
  });

  it('GET /todos --> validates request body', () => { 
    return request(app)
      .post('/todos')
      .send({ name: 123 })
      .expect(422);
  });
});
