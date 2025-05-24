// components/ProductDetail/ProductDetailSkeleton.jsx
import React from 'react';
import './productDetailsSkeleton.css';

function ProductDetailSkeleton() {
    return (
        <div className="product-detail-container">
            <div className="skeleton-title shimmer"></div>
            <div className="skeleton-image shimmer"></div>
            <div className="skeleton-price shimmer"></div>
            <div className="skeleton-description shimmer"></div>
            <div className="skeleton-button shimmer"></div>
        </div>
    );
}

export default ProductDetailSkeleton;
