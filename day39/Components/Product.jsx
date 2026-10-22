import React from "react";
function Product()
{
    let isAvailable = true;
    return (
    <div>
    <h2>Product Details</h2>
    {isAvailable ? (<h4>Product in Stock</h4>) : (<h4>Out of Stock</h4>)}
    </div>
    )
}
export default Product
