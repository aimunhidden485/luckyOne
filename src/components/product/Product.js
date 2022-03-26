import React from 'react';
import './product.css'
const Product = (props) => {
    const {name, image, price}=props.product
    const handler=props.handleAddToCart
    return (
        <div className='card'>
        <div className="image">
            <img src={image} alt="" />
        </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <div className="button">
                <button onClick={()=>handler(props.product)}>
                    <p>Add to cart</p>
                    
                </button>
            </div>
        </div>
    );
};

export default Product;