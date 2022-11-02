
const express = require('express');
const routes = express.Router();
const controller = require('../controllers/todo')



// routes.get('/api/addTodo/:description', (req, res) => {
//   controller.addTodo(req.params.description);
//   const todos = controller.getAllTodos();
//   res.render('main-template', {
//     title: 'Aplicación de gestión de TODOs',
//     todoList: todos
//   });

// });


routes.post('/addTodo/', controller.addTodo);

routes.post('/delTodo/', controller.delTodo);

routes.get('/', controller.getAllTodos);

module.exports = routes;