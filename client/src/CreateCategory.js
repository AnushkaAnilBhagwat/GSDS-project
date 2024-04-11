import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CategoryForm from "./Forms/CategoryForm";
import { Link } from "react-router-dom";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append("name", name)
            productData.append("photo", photo)

            const { data } = await axios.post('/category/create-category', productData)
            if (data?.success) {
                toast.success(`${name} is created`)
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong in input form");
        }
    };




    const getAllCategory = async () => {
        try {
            const data = await axios.get("http://localhost:8080/category/get-category");

            setCategories(data.data.category);



        } catch (error) {
            console.log(error);
            toast.error("Error while getting categories");
        }
        // axios.get('http://localhost:8080/category/get-category', {
        //     method: "GET",
        // })
        //     .then((categories) => {

        //         setCategories(categories.data)
        //         console.log(categories);
        //     })
        // .catch(err => console.log(err))
    };

    useEffect(() => {
        getAllCategory();
    }, []);


    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append("name", name)
            productData.append("photo", photo)
            axios.post("http://localhost:8080/category/create-category", productData)
            console.log("Category created succesfully");
        } catch (error) {
            console.log(error);
            toast.error("Error while creating category");
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append("name", name)
            productData.append("photo", photo)
            axios.put("http://localhost:8080/category/update-category", productData)
            console.log("Category created succesfully");
        } catch (error) {
            console.log(error);
            toast.error("Error while creating category");
        }
    }

    return (
        <>
            <div className="form-container">
                <form>

                    <h1>Create Category</h1>
                    <div>
                        <input type="text" value={name} placeholder="write a name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="img-select">
                        <label>
                            {photo ? photo.name : "Upload image"}
                            <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden />
                        </label>
                    </div>
                    <div>
                        {photo && (
                            <img src={URL.createObjectURL(photo)} alt="category-photo" height={'200px'} className="img-photo" />
                        )}
                    </div>
                    <div>
                        <button onClick={handleCreate}>Create Product</button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
            <table className="form-container">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat) => (
                        <tr key={cat._id}>
                            <td>{cat.name}</td>
                            <td><button >Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default CreateCategory;