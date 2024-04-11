import express from 'express'
import { categoryPhotoController, createCategoryController, deleteCategoryController, getCategoryController, getSingleCategoryController, updateCategoryController } from '../controllers/categoryController.js';
import formidable from 'express-formidable'


const router = express.Router()

router.post('/create-category', formidable(), createCategoryController);

router.put('/update-category/:id', formidable(), updateCategoryController);

router.get('/get-category', getCategoryController);

router.get('/get-single-category/:id', getSingleCategoryController);

router.delete("/delete-category/:id", deleteCategoryController);

router.get('/category-photo/:cid', categoryPhotoController);

export default router;