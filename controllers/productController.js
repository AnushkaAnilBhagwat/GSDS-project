import slugify from 'slugify';
import productModel from '../models/productModel.js'
import fs from 'fs'

export const createProductController = async(req, res) =>{
    try{
        const {name,slug,description,price,category,quantity,shipping} = req.fields
        const {photo} = req.files

        switch(true){
            case !name:
                return res.status(500).send({error: "Name is required"})
            case !description:
                return res.status(500).send({error: "Description is required"})
            case !price:
                return res.status(500).send({error: "Price is required"})
             case !category:
                return res.status(500).send({error: "Category is required"})
            case !quantity:
                return res.status(500).send({error: "Quantity is required"})
            case !photo && photo.size > 100000:
                return res.status(500).send({error: "photo is required which should be less than 1mb"})
        }

        const products = new productModel({...req.fields,slug:slugify(name)});
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            products,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product',
        })
    }
};