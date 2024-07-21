const express = require('express')
const router = express.Router()
const {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller.js')

// // Retrieve all products
// router.get('/', getProducts);

// // Retrieve a single product by ID
// router.get('/:id', getSingleProduct);

// // Create a new product
// router.post('/', createProduct);

// // Update an existing product
// router.put('/:id', updateProduct);

// // Delete a product
// router.delete('/:id', deleteProduct);

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct);

module.exports = router