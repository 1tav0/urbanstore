const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const todos = [
  {
    id: 1,
    name: 'Do something',
    completed: false
  }
]

router.get('/', (req, res, next) => {
  res.json(todos);
})


router.get('/:id', (req, res, next) => {
  const todo = todos.find(item => item.id === Number(req.params.id))

  if (!todo) {
    return next(createError(404, 'Not Found'));
  }

  res.json(todo);
})

router.post('/', (req, res, next) => {
  //get the incoming body of the todo in the request
  const { body } = req;

  //for last test validator
  if (typeof body.name !== 'string') {
    return next(createError(422, 'Validation Error'));
  }
  //create a new Todo with the values in the request body
  const newTodo = {
    id: todos.length + 1,
    name: body.name,
    completed: false
  };

  //add the new todo to the array list
  todos.push(newTodo);

  //respond to the client the new todo
  res.status(201).json(newTodo);
})


module.exports = router;