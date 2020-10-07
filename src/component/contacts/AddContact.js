import React, { Component } from 'react';
import { Consumer } from '../Provider';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onChangeInput = (e) => this.setState({
        [e.target.name]: e.target.value,
    });

    submit = (dispatch, size, e) => {
        const { name, email, phone } = this.state;
        e.preventDefault();

        dispatch({
            type: 'ADD_CONTACT',
            payload: {
                id: size + 1,
                name: name,
                email: email,
                tel: phone
            }
        });
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Contact</h4>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                defaultValue={name}
                                                onChange={this.onChangeInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                defaultValue={email}
                                                onChange={this.onChangeInput}
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                defaultValue={phone}
                                                onChange={this.onChangeInput}
                                            />
                                        </div>
                                        <button className="btn btn-success btn-block"> Add New Contact</button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;