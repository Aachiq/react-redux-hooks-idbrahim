import React, { Component } from 'react';
import { Consumer } from '../Provider';
import TextInputGroup from '../helpers/TextInputGroup'

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
                                        <TextInputGroup 
                                             label="name"
                                             type="text"
                                             name="name"
                                             value={name}
                                             onChange={this.onChangeInput}   
                                        />
                                        <TextInputGroup 
                                             label="email"
                                             type="email"
                                             name="email"
                                             value={email}
                                             onChange={this.onChangeInput}   
                                        />
                                        <TextInputGroup 
                                             label="phone"
                                             type="text"
                                             name="phone"
                                             value={phone}
                                             onChange={this.onChangeInput}   
                                        />
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