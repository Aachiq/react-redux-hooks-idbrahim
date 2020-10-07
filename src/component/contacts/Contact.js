import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
    onDeleteClick = () => {
    console.log('deleted clicked')
    this.props.deleteContactFromChild();
    }

    render() {
        const { name, tel, email } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {name}
                        <i
                            onClick={this.showContact.bind(this, name)}
                            className="fa fa-sort-down" style={{ cursor: 'pointer'}}
                        >
                        </i>
                        <i
                            style={{
                                color: 'red',
                                float: 'right',
                                cursor: 'pointer'
                            }}
                            onClick={this.onDeleteClick}  
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