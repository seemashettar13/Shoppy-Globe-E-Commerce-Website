import { useEffect, useState } from 'react';

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(function () {
        fetch('https://dummyjson.com/products')
            .then(function (res) {
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                return res.json();
            })
            .then(function (data) {
                setProducts(data.products);
            })
            .catch(function (err) {
                setError(err.message);
            });
    }, []);

    return { products, error };
}

export default useFetchProducts;


// creating a custom hook so that whenever we have to deal with product fetching we can call our custom hook...