import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Select } from "antd"
import { Link, useParams, useNavigate } from "react-router-dom";
const { Option } = Select


const UpdateProduct = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [photo, setPhoto] = useState("")
    const [id, setId] = useState("")

    const getSingleProduct = async () => {
        try {
            const data = await axios.get(`http://localhost:8080/products/get-product/${params.slug}`)
            console.log(data.data);
            setName(data.data.product.name);
            setId(data.data.product._id);
            setDescription(data.data.product.description);
            setPrice(data.data.product.price);
            setQuantity(data.data.product.quantity);
            setPhoto(data.data.product.photo);
            setCategory(data.data.product.category._id);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleProduct();
    }, []);

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

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append("name", name)
            productData.append("description", description)
            productData.append("price", price)
            productData.append("quantity", quantity)
            photo && productData.append("photo", photo)
            productData.append("category", category)
            axios.put(`http://localhost:8080/products/update-product/${id}`, productData)
            console.log("Product updated succesfully");
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error("Error while updating product");
        }
    }

    const handleDelete = async() => {
        try{
            axios.delete(`http://localhost:8080/products/delete-product/${id}`)

            navigate('/')
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="form-container">
                <form>


                    <h1>Update Product</h1>
                    <Select placeholder="Select a category" size="large" showSearch onChange={(value) => { setCategory(value) }} value={category}>
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
                        {photo ? (
                            <img src={URL.createObjectURL(photo)} alt="product-photo" height={'200px'} className="img-photo" />
                        ) : (
                            <img src={`http://localhost:8080/products/product-photo/${id}`} alt="product-photo" height={'200px'} className="img-photo" />
                        )
                        }
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
                        <button onClick={handleUpdate}>Update Product</button>
                        <button onClick={handleDelete}>Delete Product</button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateProduct;