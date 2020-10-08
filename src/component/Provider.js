import React, { Component } from 'react'
import axios from 'axios'


const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        case 'EDIT_CONTACT':
            return {
                contacts: state.contacts.map(
                    (contact) => (contact.id === action.payload.id) ? contact = action.payload : contact)
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            { id: 1, name: "Moahmed Idbrahim", phone: "0852000", email: "idbrahim@gmail.com" },
            { id: 2, name: "Basma Idbrahim", phone: "9852000", email: "basma@gmail.com" },
            { id: 3, name: "Walid Idbrahim", phone: "8852000", email: "walid@gmail.com" },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            contacts: res.data
        })
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
