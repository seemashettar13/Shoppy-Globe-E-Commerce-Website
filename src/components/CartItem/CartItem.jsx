import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import './cartIterm.css'
function CartItem(props) {
    const dispatch = useDispatch();
    const item = props.item;

    function handleRemove() {
        dispatch(removeFromCart(item.id));
    }

    function handleIncrease() {
        dispatch(increaseQuantity(item.id));
    }

    function handleDecrease() {
        dispatch(decreaseQuantity(item.id));
    }

    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-price">Price: ${item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <div className="cart-item-controls">
                    <button onClick={handleDecrease} className="qty-btn">-</button>
                    <button onClick={handleIncrease} className="qty-btn">+</button>
                    <button onClick={handleRemove} className="remove-btn">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
