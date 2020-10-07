import React, { Component } from 'react'


const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':

            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };

        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            { id: 1, name: "Moahmed Idbrahim", tel: "0852000", email: "idbrahim@gmail.com" },
            { id: 2, name: "Basma Idbrahim", tel: "9852000", email: "basma@gmail.com" },
            { id: 3, name: "Walid Idbrahim", tel: "8852000", email: "walid@gmail.com" },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
