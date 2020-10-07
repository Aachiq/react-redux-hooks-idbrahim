import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, name: "Moahmed Idbrahim", tel: "0852000", email: "idbrahim@gmail.com" },
            { id: 2, name: "Basma Idbrahim", tel: "9852000", email: "basma@gmail.com" },
            { id: 3, name: "Walid Idbrahim", tel: "8852000", email: "walid@gmail.com" },
        ]
    }

    deleteContact(id) {
       const { contacts } = this.state;
       const newListContacts = contacts.filter((contact) => contact.id !== id );
      this.setState({ 
          contacts : newListContacts
      })
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact 
                        key={contact.id} 
                        data={contact}
                        deleteContactFromChild={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </div>
        )
    }

}
export default Contacts;
