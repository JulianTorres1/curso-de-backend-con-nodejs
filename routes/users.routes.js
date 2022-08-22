const express = require('express');
const faker = require('faker');
const { ro } = require('faker/lib/locales');

const router = express.Router();

router.get('/users', (req, res) => {
  const {limit , offset } = req.query;

  if (limit && offset ) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No se encontraron los valores! >:C')
  }
});

module.exports = router;
