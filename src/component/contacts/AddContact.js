import React, { Component } from 'react';
import { Consumer } from '../Provider';
import TextInputGroup from '../helpers/TextInputGroup'
import axios from 'axios';
class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    }
    onChangeInput = (e) => this.setState({
        [e.target.name]: e.target.value,
    });

    submit = (dispatch, size, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if( name === "" ){
            this.setState({errors : { name: "the name is required!"}})
            return;
        }
        if( phone === "" ){
            this.setState({errors : { phone: "the phone is required!"}})
            return;
        }
        if( email === "" ){
            this.setState({errors : { email: "the email is required!"}})
            return;
        }
        const newContact = {
                name: name,
                email: email,
                phone: phone
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        .then(res =>  dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        })
        );

       
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors :{}
        });
        this.props.history.push('/');
    };
            render() {
                const { name, email, phone, errors } = this.state;
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
                                                    error={errors.name}
                                                />
                                                <TextInputGroup
                                                    label="email"
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={this.onChangeInput}
                                                    error={errors.email}
                                                />
                                                <TextInputGroup
                                                    label="phone"
                                                    type="text"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={this.onChangeInput}
                                                    error={errors.phone}
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