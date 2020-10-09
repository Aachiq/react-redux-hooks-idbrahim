import React, { useState } from 'react';
import AddProduct from './AddProduct';

const Product = () => {

    const [listProduct, setListProduct] = useState([
        { id: 1, name: 'Iphone', price: 1200 },
        { id: 2, name: 'Huawei', price: 1000 },
        { id: 3, name: 'Samsung', price: 1100 },
    ]);
    const addNewProduct = (newProduct) => {
        setListProduct([newProduct,...listProduct]);
    }

    return (
        <div>
        <AddProduct addNewProduct={addNewProduct} />
        <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product
