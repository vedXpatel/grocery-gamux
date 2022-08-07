import React from 'react';
import milk from "../assets/milk.png";
import "./styles.css";

function ProductCategories() {
  return (
    <>
        <div className="category-container">
            <img src={milk} alt="" />
            <h5>Dairy & Bakery</h5>
        </div>
    </>
  )
}

export default ProductCategories