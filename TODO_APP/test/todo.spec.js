const app = require('../app');
const controller = require('../controllers/todo')
const request = require("supertest");


describe("API || todos", () => {
 
  
  
    it("Exite el endpoint de 'api/addTodo'", (done) => {
      request(app).get('/api/addTodo').expect(200, done)
    })

    it("Exite el endpoint de 'api/delTodo'", (done) => {
      request(app).get('/api/delTodo').expect(200, done)
    })



    
    // it("El metodo getAllTodos del controlador devuelve una lista de todos", (done) => {
    //   request(controller).(200).then((response) => {
    //     expect(response.body).toBeInstanceOf(Array);
    //     done();
    //   });
    // })
  
  
  });