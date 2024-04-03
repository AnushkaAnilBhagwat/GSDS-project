import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req,res) => {
    try {
        const {name} = req.body
        if(!name) {
            return res.status(401).send({Message: "Name is required"})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success: true,
                message: "Category Already Exists"
            })
        }
        const category = await new categoryModel({name, slug: slugify(name)}).save()
        res.status(201).send({
            success: true,
            message: "new category created",
            category,
        });
    } catch(error) {
        console.log(error);
        res.send(500).send({
            success: false,
            error,
            message: "Error is Category",
        })
    }
};

export const updateCategoryController = async(req,res) => {
    try{
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id, {name, slug: slugify(name)}, {new:true})
        res.status(200).send({
            message: 'category updated successsfuly',
            category,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating category"
        })
    }
}

export const getCategoryController = async (req, res) => {
    try{
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All categories list",
            category,
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting categories",
            error,
        })
    }
}

export const getSingleCategoryController = async(req,res) => {
    try {
        const {id} = req.params
        const category = await categoryModel.findById(id)
        res.status(200).send({
            success: true,
            message: "Found the category",
            category,
        })
    }catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting the category"
        })
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Successfuly Deleted the category",
        })
    }catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while deleting the category"
        })
    }
}