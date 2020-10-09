import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';

function AddProduct({ addNewProduct }) {
    const {loggedIn,setLoggedIn} = useContext(UserContext);

    const [product, setProduct] = useState({ name: '', price: 0 })
    const handleForm = e => {

        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (product.name === '' || product.price === 0)
            return;
        const newProduct = {
            id: uuidv4(),
            ...product
        }
        addNewProduct(newProduct);
        setProduct({ name: '', price: 0 })

    }
    const changeValue = () => {
        setLoggedIn(!loggedIn)
}
    return (
        <div>
            <h1>{loggedIn ? 'You\'re Logged' : 'Logout'}</h1>
            <button onClick={changeValue} className="btn btn-success">Toogle</button>
            <h3>Create a Product</h3>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                        onChange={handleForm}
                        value={product.name}
                        placeholder="Name of product"
                        type="text"
                        name="name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                        onChange={handleForm}
                        value={product.price}
                        placeholder="Price of product"
                        type="text"
                        name="price"
                        className="form-control"
                    />
                </div>
                {JSON.stringify(product)}
                <button className="btn btn-block btn-primary">New Product</button>
            </form>
        </div>
    )
}

export default AddProduct
