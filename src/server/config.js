//Requerir Express
const express = require('express');

//Requerir Path
const path = require('path');

//Requerir Morgan
const morgan = require('morgan');

//Requerir mysql
const mysql = require('mysql');

//Requerir Express-myconnection
const myConnection = require('express-myconnection');

//Requerir Routes
const routes = require('../routes/router');

//Export config
module.exports = app =>{
  //Setting

  //Setting Port
  app.set('port', process.env.PORT || 3500);

  //Setting Motor de Plantillas
  app.set('view engine', 'ejs');

  //Setting Views
  app.set('views', path.join(__dirname, '../views'));

  //Middlewares

  //Morgan
  app.use(morgan('dev'));

  //MySql
  app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'mariagabriela12',
    port: 3306,
    database: 'crudcristianz'
  }, 'single'));

  //Middlewares ocupado del módulo de Express para entender los datos del formulario
  app.use(express.urlencoded({extended: false}));

  //Routes
  routes(app);

  //Static File
  app.use('/public', express.static(path.join(__dirname, '../public')));

  return app;
};
