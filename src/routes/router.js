//Requerir Express
const express = require('express');

//Ocupar Router del modulo Express
const router = express.Router();

//Import controllers.js
const ctrl = require('../controllers/controllers');

//Export router.js
module.exports = app => {
  //Conseguir Raíz Principal
  router.get('/', ctrl.index);

  //Post /add
  router.post('/add', ctrl.save);

  //Delete
  router.get('/delete/:id', ctrl.delete);

  //Update
  router.get('/update/:id', ctrl.update);
  router.post('/update/:id', ctrl.newDate);

  //Utilizar los Router
  app.use(router);
};
