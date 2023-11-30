const express = require('express');
const app = express();

var todosRouter = require('./routes/todos');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')))
app.use('/todos', todosRouter);

module.exports = app;
