import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../Provider';
import axios from 'axios';

import './contact.css'
class Contact extends Component {

    state = {
        showContactToggle: true,

    }
    showContact(myMessage) {
        console.log(`Salam: ${myMessage}`);
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }
    onDeleteClick = async (id, dispatch) => {
     try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
     } catch (error) {
       console.error(error.message);  
     }
    }

    render() {
        const { id, name, phone, email } = this.props.data;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {name}
                                    <i
                                        onClick={this.showContact.bind(this, name)}
                                        className="fa fa-sort-down"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </i>
                                    <i
                                        style={{
                                            color: 'red',
                                            float: 'right',
                                            cursor: 'pointer'
                                        }}
                                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                        className="fa fa-times">
                                    </i>
                                    <Link to={`/contact/edit/${id}`}>
                                    <i
                                    style={{
                                        color: 'orange',
                                        float: 'right',
                                        cursor: 'pointer',
                                        marginRight:'8px' 
                                    }}
                                    className="fa fa-pencil">
                                </i>
                                </Link>
                                </h4>
                                <div className="card-text">
                                    {(this.state.showContactToggle) ? (

                                        <ul className="list-groudiv">
                                            <li className="list-group-item">{phone}</li>
                                            <li className="list-group-item">{email}</li>
                                        </ul>
                                    ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}
Contact.defaultProps = {
    name: "My name",
    phone: "0000",
    email: "my@email.com"
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
export default Contact;