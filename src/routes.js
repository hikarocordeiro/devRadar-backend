const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello' });
});

routes.post('/devs', DevController.store);

module.exports = routes;
