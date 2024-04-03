import React from "react";

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
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/foundation_category.png`}
                    alt="logo"
                />
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/plus_sign.png`}
                    alt="logo"
                />
            </div>
        </>
    )
}

export default Categories;