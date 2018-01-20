const authCheck = require('../auth.js');
const postsRoutes = require('./posts');
const usersRoutes = require('./users');

//app.post('/api/todos', authCheck, todosController.create);

module.exports = (app) => {
  app.get('/api', authCheck, (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.use('/api/users', usersRoutes);

  app.use('/api/posts', postsRoutes);
};
