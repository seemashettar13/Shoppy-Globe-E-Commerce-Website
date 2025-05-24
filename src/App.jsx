import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import './index.css';

const ProductList = lazy(function () {
    return import('./components/ProductList/ProductList');
});

const ProductDetail = lazy(function () {
    return import('./components/ProductDetails/ProductDetails');
});

const Cart = lazy(function () {
    return import('./components/Cart/Cart');
});

import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Suspense fallback={<SkeletonLoader />}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer/>
        </div>
    );
}


export default App;
