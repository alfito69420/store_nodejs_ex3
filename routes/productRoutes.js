const express = require('express')
const Product = require('../models/Product')
const ProductController = require('../controllers/ProductController')

const router = express.Router()

/*router.get('/products', async (req, res)=>
{
    
    try {
        const products = await Product.find().populate('category')
        res.send(products)    
    } catch (error) {
        console.log(error)
    }
})*/

router.get('/products', ProductController.findAll)
router.post('/products', ProductController.save)
router.put('/products', ProductController.update)
router.patch('/products', ProductController.patch)
router.delete('/products', ProductController.deleteProduct)


module.exports = router