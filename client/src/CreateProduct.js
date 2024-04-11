import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Select } from "antd"
import { Link } from "react-router-dom";
const { Option } = Select

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
    useEffect(() => {
        getAllCategory();
    }, []);

    const handleCreate = async(e) => {
        e.preventDefault()
        try{
            const productData = new FormData()
            productData.append("name", name)
            productData.append("description", description)
            productData.append("price", price)
            productData.append("quantity", quantity)
            productData.append("photo", photo)
            productData.append("category", category)
            axios.post("http://localhost:8080/products/create-product", productData)
            console.log("Product created succesfully");
        } catch (error) {
        console.log(error);
        toast.error("Error while creating product");
    }
    }

    return (
        <>
            <div className="form-container">
                <form>


                    <h1>Create Product</h1>
                    <Select placeholder="Select a category" size="large" showSearch onChange={(value) => { setCategory(value) }}>
                        {categories.map((cat) => (
                            <Option key={cat._id} value={cat._id}>
                                {cat.name}
                            </Option>
                        ))}
                    </Select>
                    <div className="img-select">
                        <label>
                            {photo ? photo.name : "Upload image"}
                            <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden />
                        </label>
                    </div>
                    <div>
                        {photo && (
                            <img src={URL.createObjectURL(photo)} alt="product-photo" height={'200px'} className="img-photo" />
                        )}
                    </div>
                    <div>
                        <input type="text" value={name} placeholder="write a name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" value={description} placeholder="write a description" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" value={price} placeholder="write price" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" value={quantity} placeholder="write quantity" onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={handleCreate}>Create Product</button>
                        <Link to= '/products'>
                            <button>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>

    )
}

export default CreateProduct;