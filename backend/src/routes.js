const express = require('express');

const UserController= require('./controllers/UserController.js')
const IncidentController= require('./controllers/IncidentController.js')
const ProfileController= require('./controllers/ProfileController.js')
const SessionController= require('./controllers/SessionController.js')
const routes = express.Router();

routes.post('/sessions',SessionController.create);
routes.get('/user',UserController.index);
routes.post('/user',UserController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
module.exports=routes;










