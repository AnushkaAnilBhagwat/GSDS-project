import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {
    Link, useParams
} from "react-router-dom";

const Categories = () => {

    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState("")

    const getAllCategory = async () => {
        try {
            const data = await axios.get("http://localhost:8080/category/get-category");
            setCategories(data.data.category);
            console.log(data);
            setId(data.data.category._id);
        } catch (error) {
            console.log(error);
            toast.error("Error while getting categories");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);


    return(
        <>
            <div className="side-img" id="categories">
                {categories?.map((cat) => (
                    <Link to={`/get-product-by-category/${cat._id}`}>
                        <img src={`http://localhost:8080/category/category-photo/${cat._id}`} />
                    </Link>
                ))}

                <Link to = '/create-category'>
                    <img
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/images/plus_sign.png`}
                        alt="logo"
                    />
                </Link>
            </div>
        </>
    )
}

export default Categories;