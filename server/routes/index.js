const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const authCheck = require('../auth.js');
const postsRoutes = require('./posts');

module.exports = (app) => {
  app.get('/api', authCheck, (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.use('/api/posts', postsRoutes);

  app.post('/api/todos', authCheck, todosController.create);
  app.get('/api/todos', authCheck, todosController.list);
  app.get('/api/todos/:todoId', authCheck, todosController.retrieve);
  app.put('/api/todos/:todoId', authCheck, todosController.update);
  app.delete('/api/todos/:todoId', authCheck, todosController.destroy);

  app.post('/api/todos/:todoId/items', authCheck, todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', authCheck, todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', authCheck, todoItemsController.destroy
  );

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', authCheck, (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
