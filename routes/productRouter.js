//! Routing
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/list', productController.list);
router.get('/delete', productController.delete);
router.get('/addPicture', productController.addPicture);
router.get('/:id', productController.id);

module.exports = router