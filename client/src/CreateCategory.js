import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CategoryForm from "./Forms/CategoryForm";
// import { Select } from "antd"
// const {Option} = Select

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);

    const [name, setName] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const{data} = await axios.post('/category/create-category', {name})
            if(data?.success){
                toast.success(`${name} is created`)
                getAllCategory();
            }else{
                toast.error(data.message);
            }
        }catch(error){
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


    return (
        <>
            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}/>
            <table>
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
                            <td><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CreateCategory;