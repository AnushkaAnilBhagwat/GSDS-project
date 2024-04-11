import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
import fs from 'fs'

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.fields
        const { photo } = req.files
        switch (true) {
            case !name:
                return res.status(500).send({ Message: "Name is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "photo is required" });
        }

        const existingCategory = await categoryModel.findOne({ name })
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exists"
            })
        }
        const category = new categoryModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            category.photo.data = fs.readFileSync(photo.path);
            category.photo.contentType = photo.type;
        }
        await category.save()
        res.status(201).send({
            success: true,
            message: "new category created",
            category,
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success: false,
            error,
            message: "Error is Category",
        })
    }
};

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.fields
        const { id } = req.params
        const category = await categoryModel.findByIdAndUpdate(id, { ...req.fields, slug: slugify(name) }, { new: true })
        //save
        res.status(200).send({
            message: 'category updated successsfuly',
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating category"
        })
    }
}

export const getCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({}).select("-photo").limit(10).sort({ createdAt: -1 });
        console.log("categories fetched");
        res.status(200).send({
            success: true,
            count: category.length,
            message: "All categories list",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting categories",
            error,
        })
    }
}

export const getSingleCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const category = await categoryModel.findById(id).select("-photo")
        res.status(200).send({
            success: true,
            message: "Found the category",
            category,
        })
    } catch (error) {
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
        const { id } = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Successfuly Deleted the category",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while deleting the category"
        })
    }
}

export const categoryPhotoController = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.cid).select("photo");
        if (category.photo.data) {
            res.set("Content-type", category.photo.contentType);
            return res.status(200).send(category.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting the category photo"
        })
    }
}