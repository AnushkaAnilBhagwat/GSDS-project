import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <h1>Glitzy</h1>

                </div>
                <div className="menu">
                    <AnchorLink href="#title">
                        <button className="menu-button">Home</button>
                    </AnchorLink>
                    <AnchorLink href="#course">
                        <button className="menu-button">Courses</button>
                    </AnchorLink>
                    <AnchorLink href="#course">
                        <button className="menu-button">Courses</button>
                    </AnchorLink>
                    <AnchorLink href="#course">
                        <button className="menu-button">Courses</button>
                    </AnchorLink>
                    <AnchorLink href="#course">
                        <button className="menu-button">Courses</button>
                    </AnchorLink>
                </div>
            </div>
        </>

    )
}
export default Navbar;