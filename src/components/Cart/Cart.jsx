import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import './cart.css';

function Cart() {
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    function getTotalPrice() {
        return cartItems.reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    if (cartItems.length === 0) {
        return <p className="empty-cart-message">Your cart is empty.</p>;
    }

    return (
        // <div className="cart-container">
        //     <h2 className="cart-title">Your Cart</h2>
        //     <div className="cart-items">
        //         {cartItems.map(function (item) {
        //             return <CartItem key={item.id} item={item} />;
        //         })}
        //     </div>
        //     <div className="total-price">
        //         <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        //     </div>
        // </div>


        <div className="cart-container">
        <div className="cart-header-row">
            <h2 className="cart-title">Your Cart</h2>
            <div className="total-price">
                    <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            </div>
        </div>
        <div className="cart-items">
                {cartItems.map(function (item) {
                    return <CartItem key={item.id} item={item} />;
                })}
        </div>
        </div>

    );
}

export default Cart;
