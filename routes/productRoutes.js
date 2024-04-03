import express from 'express'
import { createProductController } from '../controllers/productController.js';

import formidable from 'express-formidable'

const router = express.Router()

//routes
router.post('/create-product', 
formidable(),
createProductController)

export default router