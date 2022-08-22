const express = require('express');
const { ro } = require('faker/lib/locales');
const { app } = require('faker/lib/locales/en');
const ProductsServices = require('../Services/product.service');


const router = express.Router();

const service = new ProductsServices();

router.use(express.json());

router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
} )

router.get('/:id', async (req, res) => {
  //destructuracion de es6
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product)
});

router.post('/',async (req,res)=>{
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

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({message: error.message})
  }


})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await ervice.delete(id);
  res.json(rta);
})

module.exports = router;
