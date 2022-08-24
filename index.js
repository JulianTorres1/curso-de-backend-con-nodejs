console.log('Starting ...');

const express = require('express');
const routerApi = require('./routes');
const  { logErrors , errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hola este es mi server en express');
})



app.get('/nueva-ruta', (req, res) => {
  res.send('Esta es Una nueva ruta');
});

// get by querys

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port,() => {
  console.log('Server Port: ' + port);
})
