import React from 'react';
import './AddToCart.css'
const AddToCart = (props) => {
    const{name, image} = props.pd
    return (
        <div className='carts-product'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default AddToCart;