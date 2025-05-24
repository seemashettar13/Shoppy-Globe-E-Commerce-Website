import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './productDetails.css'
import ProductDetailSkeleton from '../SkeletonLoader/ProductDetailsSkeleton';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(function () {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(function (res) {
                if (!res.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                return res.json();
            })
            .then(function (data) {
                setProduct(data);
            })
            .catch(function (err) {
                setError(err.message);
            });
    }, [id]);

    function handleAddToCart() {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            }));
        }
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product && !error) {
        return <ProductDetailSkeleton />;
    }
    return (
        <>
            <div>
                <Link to="/" className="back-button">← Back</Link>

            </div>
            <div className="product-detail-container">
                <h2>{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} />
                <p className="product-price"><strong>Price:</strong> ${product.price}</p>
                <p className="product-description">{product.description}</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default ProductDetail;

