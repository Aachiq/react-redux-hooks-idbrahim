import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Provider';
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
    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    render() {
        const { id, name, tel, email } = this.props.data;
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
                                </h4>
                                <div className="card-text">
                                    {(this.state.showContactToggle) ? (

                                        <ul className="list-groudiv">
                                            <li className="list-group-item">{tel}</li>
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
    tel: "0000",
    email: "my@email.com"
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
export default Contact;