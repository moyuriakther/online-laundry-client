import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import LaundryService from './LaundryService';

const LaundryServices = ({clickToAdd, clickToRemove, cartItems, products}) => {
    // const [laundryServices, setLaundryServices] = useState([]);
    // const [cartItems, setCartItems] = useState([]);

    // const clickToAdd = (laundryServices) => {
    //     const exist = cartItems.find(x => x.name === laundryServices.name);
    //     if(exist) {
    //         setCartItems(cartItems.map(x => x.name === laundryServices.name ? {...exist, qty:exist.qty + 1} : x))
    //     }
    //     else{
    //         setCartItems([...cartItems, {...laundryServices, qty:1 }])
    //     }
    // }
    // const clickToRemove = (laundryServices) => {
    //     const exist = cartItems.find(x => x.name === laundryServices.name);
    //     if(exist.qty === 1) {
    //         setCartItems(cartItems.filter(x => x.name !== laundryServices.name))
    //     }
    //     else{
    //         setCartItems(cartItems.map(x => x.name === laundryServices.name ? {...exist, qty: exist.qty - 1 } : x))
    //     }
    // }

    // useEffect(() => {
    //     fetch('https://mocki.io/v1/f757d310-8c14-4359-ab3a-b2775ce1cde7')
    //     .then(res => res.json())
    //     .then(data => setLaundryServices(data))
    //   }, []);
console.log(cartItems)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <h2 className="d-flex justify-content-center mb-4">LAUNDRY ITEMS</h2>
                    <div className="row">
                        {
                            products.map(product => <LaundryService clickToAdd={clickToAdd} product={product} />)
                        } 
                    </div>
                </div>
                <div className="col-lg-4">
                    <h2 className="d-flex justify-content-center mb-4">CART</h2>
                    {/* <Cart clickToAdd={clickToAdd} clickToRemove={clickToRemove} cartItems={cartItems}/> */}
                </div>
            </div>
        </div>
    );
};

export default LaundryServices;