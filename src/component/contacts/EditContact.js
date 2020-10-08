import React, { Component } from 'react';
import { Consumer } from '../Provider';
import TextInputGroup from '../helpers/TextInputGroup'
import axios from 'axios';
class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const { name, email, phone } = res.data
        this.setState({
            name: name,
            email: email,
            phone: phone
        });
    }
    onChangeInput = (e) => this.setState({
        [e.target.name]: e.target.value,
    });

    submit = async (dispatch, size, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if (name === "") {
            this.setState({ errors: { name: "the name is required!" } })
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: "the phone is required!" } })
            return;
        }
        if (email === "") {
            this.setState({ errors: { email: "the email is required!" } })
            return;
        }
        const updateContact = {
            name: name,
            email: email,
            phone: phone
        }
        try {
            const id = this.props.match.params.id;
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
            dispatch({
                type: 'EDIT_CONTACT',
                payload: res.data
            })
        } catch (error) {
            console.error(error.message);
        }


        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
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
                                        <h4 className="card-title">Edit Contact</h4>
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
                                        <button className="btn btn-danger btn-block"> Update Contact</button>
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

export default EditContact;