import React from 'react';

const ProductTable = ({products, handleDeleteProduct}) => {
    console.log(products);
    return (
        <div>
            <h3>Products Length: {products.length}</h3>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map((product, index) => 
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td onClick={() => handleDeleteProduct(index)}>Delete</td>
                                </tr>
                            )
                        }
                </tbody>
        </div>
    );
};

export default ProductTable;