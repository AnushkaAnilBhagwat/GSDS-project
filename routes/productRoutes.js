import express from 'express'
import { createProductController, getProductController, getSingleProductController } from '../controllers/productController.js';

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

export default router;