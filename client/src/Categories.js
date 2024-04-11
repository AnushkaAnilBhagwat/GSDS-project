import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

const Categories = () => {
    return(
        <>
            <div className="side-img">
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/lipstick_category.png`}
                    alt="logo"
                />
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/eyeshadow_category.png`}
                    alt="logo"
                />
                <Link to = '/create-product'>
                    <img
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/images/foundation_category.png`}
                        alt="logo"
                    />
                </Link>
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