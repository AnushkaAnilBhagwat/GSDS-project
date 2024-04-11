import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import { axios } from 'axios';
import { Select } from "antd"
const {Option} = Select

const CreateProduct = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [photo, setPhoto] = useState("")



    const getAllCategory = async () => {
        try {
            const data = await axios.get("http://localhost:8080/category/get-category");

            setCategories(data.data.category);



        } catch (error) {
            console.log(error);
            toast.error("Error while getting categories");
        }
    };
    return (
        <>
        <Select placeholder="Select a category" size = "large" showSearch onChange={(value) => {setCategory(value)}}>
            {categories.map((cat) => (
                <Option key={cat._id} value={cat.name}>
                    {cat.name}
                </Option>
            ))}
        </Select>

        </>
    )
}

export default CreateProduct;