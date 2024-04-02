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