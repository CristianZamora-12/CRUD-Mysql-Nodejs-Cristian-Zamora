//Requerir Express
const express = require('express');

//Import config.js
const config = require('./server/config');

//Crear const App
const app = config(express());

//Montar Puerto del Servidor
app.listen(app.get('port'), () => {
  console.log('Server on Port', app.get('port'));
});
