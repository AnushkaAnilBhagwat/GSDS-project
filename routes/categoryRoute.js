import express from 'express'
import { createCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

router.post('/create-category', createCategoryController)

export default router;