import React, { useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
import AddToCart from '../addToCart/AddToCart';

const Shop = () => {
    // -----------------------------------products data added---------------------------------------
    const products =[
        {name: 'Aveeno mosturising lotion', price: 25, image: 'https://carnesia.com/wp-content/uploads/2021/11/unnamed-3-264x347.jpg',id: 1},
        {name: 'Beauty of joseon calming serum', price: 20, image: 'https://carnesia.com/wp-content/uploads/2022/01/Beauty_of_Joseon_Calming_serum__74687.1610560630-264x347.png',id: 2},
        {name: 'Freiyas oil control glow boost', price: 5, image: 'https://carnesia.com/wp-content/uploads/2021/02/154530141_470276271022118_4762064664094432221_n-1-264x347.jpg',id: 3},
        {name: 'Ribana activated carbon soap', price: 3, image: 'https://carnesia.com/wp-content/uploads/2021/02/245-01-min-scaled-264x347.jpg',id: 4},
        {name: 'Garnier micellar cleansing water', price: 5, image: 'https://carnesia.com/wp-content/uploads/2020/12/3a415447ad86d57cdcd37b9841680046-min-40-264x347.jpg',id: 5},
        {name: 'Cetaphil gentle exfoliating cleanser', price: 23, image: 'https://carnesia.com/wp-content/uploads/2021/04/0d81213a5ce-2020-11-30-264x347.jpg',id: 6},
        {name: 'Revuele no problem tea tree facewash gel', price: 5, image: 'https://carnesia.com/wp-content/uploads/2021/03/25-01-min-scaled-264x347.jpg',id: 7},
        {name: 'Nature republic green derma serum', price: 7, image: 'https://carnesia.com/wp-content/uploads/2020/10/51n45pcj-aL._SL1000_-min-264x347.jpg',id: 8},
        {name: 'Neutrogen hydro boost cleasing gel', price: 10, image: 'https://carnesia.com/wp-content/uploads/2020/07/CLG-01-min-264x347.jpg',id: 9},
        {name: 'Cosrx all about snail trial kit', price: 15, image: 'https://carnesia.com/wp-content/uploads/2022/01/COSRX-All-About-Snail-Trial-Kit-264x347.jpg',id: 10}
      ]
     const [cart, setCart] =useState([])
     const handleAddToCart =(product)=>{
         const newCart =[...cart, product]
         setCart(newCart)
     }
    //  -----------------------choose one from multiple option function added------------------------
     const chooseOne=(pd)=>{
         let newCart =[...cart, pd]
         const choose = Math.floor(Math.random() * newCart.length-1)
        const product = newCart[choose]
        document.getElementById('chosen-product').innerText= product.name
        document.getElementById('product-image').src =product.image
        document.getElementById('chosen-product-header').style.display='block'
       newCart = []
     }
     const reset =(pd) =>{
         const empty = []
         setCart(empty)
     }
      
    return (
        <div className='shop'>
            <div className="products-container">
            
                    {
                        products.map(product=><Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
                    }
            </div>
            <div className="cart">
                    <h3>Selected products</h3>
                    {
                        cart.map(pd =><AddToCart pd={pd}></AddToCart>)
                    }
                    <button onClick={chooseOne} className="cart-button">Choose one</button>
                    <button onClick={reset} className='cart-button'>Reset</button>
                    <h3 id='chosen-product-header'>Chosen product:</h3>
                    <div className='carts-product'>
                
            <img id='product-image' src='./' alt="" />
            <p id='chosen-product'></p>
        </div>
            </div>
        </div>
    );
};

export default Shop;