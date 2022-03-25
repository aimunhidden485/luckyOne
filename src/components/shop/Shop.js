import React, { useState } from 'react';

const Shop = () => {
    const products =[
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 1},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 2},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 3},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 4},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 5},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 6},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 7},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 8},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 9},
        {name: 'Aveeno mosturizing lotion', price: 2050, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 10}
      ]
     
      
    return (
        <div className='shop'>
            <div className="products-container">
                    {
                        products.map(product=>console.log(product))
                    }
            </div>
            <div className="cart">

            </div>
        </div>
    );
};

export default Shop;