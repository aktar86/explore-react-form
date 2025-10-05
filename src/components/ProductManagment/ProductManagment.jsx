import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {
    const [products, setProducts] = useState([])

    const handeleProductChane = (newProduct) => {
        const newProductItem = [...products, newProduct]
        setProducts(newProductItem)
    }

    //Action Delete Function
    const handleDeleteProduct = (id) => {
        //filter boolean return kore
        //book == book ture tahole book return korbe. 5 == 5 thakbe 5 != 5 hoy tahole remove hoye jabe.
        const remaining = products.filter((_,index) => index !== id)
        setProducts(remaining)
    }

    return (
        <div>
            <ProductForm handeleProductChane={handeleProductChane}></ProductForm>
            <ProductTable products={products} handleDeleteProduct={handleDeleteProduct}></ProductTable>
        </div>
    );
};

export default ProductManagment;