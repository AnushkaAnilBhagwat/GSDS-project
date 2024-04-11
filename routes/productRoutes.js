import express from 'express'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js';

import formidable from 'express-formidable'

const router = express.Router()

//routes
router.post('/create-product', 
formidable(),
createProductController);

//get products
router.get('/get-product',getProductController );

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update products
router.put(
    "/update-product/:pid", 
    formidable(),
    updateProductController);


export default router;