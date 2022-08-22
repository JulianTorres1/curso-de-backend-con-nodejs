console.log('Starting ...');

const express = require('express');
const routerApi = require('./routes')

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('hola este es mi server en express');
})



app.get('/nueva-ruta', (req, res) => {
  res.send('Esta es Una nueva ruta');
});

// get by querys

routerApi(app);



app.listen(port,() => {
  console.log('Server Port: ' + port);
})
