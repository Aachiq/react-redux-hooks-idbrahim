import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';

const Product = () => {

    const [listProduct, setListProduct] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("all")
    })
 
    const addNewProduct = (newProduct) => {
        setListProduct([newProduct, ...listProduct]);
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div className="text-center">
                <h3>{counter}</h3>
                <button onClick={increment} className="btn btn-success">increment</button>
            </div>
            <AddProduct addNewProduct={addNewProduct} />
            <hr />
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
