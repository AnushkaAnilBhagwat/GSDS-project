import express from 'express'
import { createCategoryController, deleteCategoryController, getCategoryController, getSingleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

router.post('/create-category', createCategoryController);

router.put('/update-category/:id', updateCategoryController);

router.get('/get-category', getCategoryController);

router.get('/get-single-category/:id', getSingleCategoryController);

router.delete("/delete-category/:id", deleteCategoryController)

export default router;