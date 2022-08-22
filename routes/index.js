const productRoutes = require('./product.routes');
const usersRoutes = require('./users.routes');
const express = require('express');


function routerApi(app) {
  const router =  express.Router();

  app.use('/api/v1', router);


  router.use('/products', productRoutes);
  router.use('/users', usersRoutes);
}

module.exports = routerApi;
