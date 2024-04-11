import React from "react";
const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="categoryForm">
                    <input type="text" className="Form-input" placeholder="Enter new category" value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default CategoryForm;