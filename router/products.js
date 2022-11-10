const express = require('express');
const { Router } = express;
const router = Router()
const Products = require('../container/container');
const products = new Products('products');

router.get('/productos', async (req, res) => {
    try {
        res.status(200).render('./pages/index')
      } catch (error) {
        res.send([]);
      } 
})

/* router.post('/productos', async (req, res) => {
    try {
      await products.save(req.body)
      res.status(200).render('./pages/index')
    } catch (error) {
        res.status(300).send('fallo la carga del articulo')
    }
}) */

module.exports = router;