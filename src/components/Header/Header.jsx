import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'

function Header() {
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    function getTotalItems() {
        return cartItems.reduce(function (total, item) {
            return total + item.quantity;
        }, 0);
    }

    return (
        <header className="header-container">
            <nav className="nav-container">
                 
                <div className='brand-cont'>
             <Link to="/" className="brand-link">
                   Beauty Box 🛒 
                </Link>
                </div>
                <div className='navigate'>
                   <ul className='page-links'>
                    <a href="/">Home</a>
                    <a href="/cart">Cart</a>
                    <a href="/#">Product</a>
                   </ul>
                </div>
                <div className='cart-cont'>
                <Link to="/cart" className="cart-link">
                    Cart ({getTotalItems()})  🛍️
                </Link>
                </div>
                
            </nav>
        </header>
    );
}

export default Header;

