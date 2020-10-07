import React from 'react';
import Navbar from './component/navbar/Navbar';
import Contacts from './component/contacts/Contacts';
import { Provider } from './component/Provider'
import AddContact from './component/contacts/AddContact';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar title="Contacts list" />
        <AddContact/>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
