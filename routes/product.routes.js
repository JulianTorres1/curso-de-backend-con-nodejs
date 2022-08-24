const express = require('express');
const { ro } = require('faker/lib/locales');
const { app } = require('faker/lib/locales/en');
const ProductsServices = require('../Services/product.service');

const validatorHandler = require('../middlewares/validator.handler');
const {getProductSchema, updateProductSchema, createProductSchema} = require('../schemas/product.schemas')

const router = express.Router();

const service = new ProductsServices();



router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
} )

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      //destructuracion de es6
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
});

router.post('/',

  validatorHandler(createProductSchema, 'body'),
  async (req,res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.post('/test', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    //res.status(404).json({message: error.message});
    next(error);
  }


})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})

module.exports = router;
