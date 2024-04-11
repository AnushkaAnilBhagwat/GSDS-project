import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const CategorisedProducts = () => {
    const key = 1;
    const navigate = useNavigate();
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("")

    const getSingleProductId = async () => {
        try {
            const { data } = axios.get(`http://localhost:8080/products/get-product/${params.slug}`)
            setId(data.product._id);
            console.log(data.product._id);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleProductId();
    }, []);

    //get all products
    const getProductsByCategory = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/products/get-product-by-category/${params._id}`
            );
            console.log(data);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        getProductsByCategory();
    }, []);

    const handleDelete = async () => {
        try {
            axios.delete(`http://localhost:8080/products/delete-product/${id}`)
            navigate('/products')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="product-list" id="products">
                {products?.map((p) => (
                    <div className="grid-item" style={{ width: "18rem" }} key={p._id}>
                        <img src={`http://localhost:8080/products/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                        <div className="card-body">
                            <h5>{p.name}</h5>
                            <p>{p.description}</p>
                        </div>
                        <div >
                            <Link to={`/update-product/${p.slug}`}>
                                <button className="menu-button">Edit</button>
                            </Link>
                            <button className="menu-button" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                ))}
                <Link to='/create-product'>
                    <div className="grid-plus grid-item" style={{ width: "18rem" }} key={key}>
                        <img
                            className="product-plus"
                            src={`${process.env.PUBLIC_URL}/images/plus_sign.png`}
                            alt="logo"
                        />
                    </div>

                </Link>

            </div>
        </>
    )
}

export default CategorisedProducts;