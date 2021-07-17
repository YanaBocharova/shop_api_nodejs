const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/getProductByName', productsController.getProductByName);
router.post('/', productsController.createProduct);
router.get('/', productsController.index);
router.delete('/:id', productsController.removeProduct);
router.get('/all', productsController.getAll);

module.exports = router;
