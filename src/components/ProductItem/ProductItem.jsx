import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './productItem.css'

function ProductItem(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const dispatch = useDispatch();
    const product = props.product;

    function handleAddToCart() {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        }));
    }
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <div className="image-wrapper">
                    {!imageLoaded && <div className="image-skeleton" />}
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className={`product-image ${imageLoaded ? 'visible' : 'hidden'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Price: ${product.price}</p>
            </Link>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductItem;

