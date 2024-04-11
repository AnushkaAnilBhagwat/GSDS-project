import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
    return (
        <>
            <div className="container" id="home">
                <div className="logo">
                    <h1>Glitzy</h1>

                </div>
                <div className="menu">
                    <AnchorLink href="#home">
                        <button className="menu-button">Home</button>
                    </AnchorLink>
                    <AnchorLink href="#categories">
                        <button className="menu-button">Categories</button>
                    </AnchorLink>
                    <AnchorLink href="#products">
                        <button className="menu-button">Products</button>
                    </AnchorLink>
                    <AnchorLink href="#about">
                        <button className="menu-button">About</button>
                    </AnchorLink>
                    <AnchorLink href="#home">
                        <button className="menu-button">Catalog</button>
                    </AnchorLink>
                </div>
            </div>
        </>

    )
}
export default Navbar;