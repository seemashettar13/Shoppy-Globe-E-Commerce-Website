import React, { useState } from 'react';
// import useFetchProducts from '../../hooks/useFetchProducts';
import useFetchProducts from '../Hooks/useFetchProducts';

import ProductItem from '../ProductItem/ProductItem';
import './productList.css'

function ProductList() {
    const { products, error } = useFetchProducts();
    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function filterProducts(product) {
        return product.title.toLowerCase().includes(search.toLowerCase());
    }


    return (
        <div className='product-list-container'>
            <input
                className='search-input'
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleChange}
            />

            {error && <h2 className='error-message'>Error: {error}</h2>}

            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '3.5rem' }} className='product-grid'> */}
            <div className='product-grid'>
                {products.filter(filterProducts).map(function (product) {
                    return <ProductItem key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default ProductList;


