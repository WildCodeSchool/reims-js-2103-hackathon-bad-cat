const routes = require('express').Router();
const userRoutes = require('./users');
const teamRoutes = require('./teams');
const projectRoutes = require('./projects');

routes.post('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

routes.use('/users', userRoutes);
routes.use('/teams', teamRoutes);
routes.use('/projects', projectRoutes);

module.exports = routes;
