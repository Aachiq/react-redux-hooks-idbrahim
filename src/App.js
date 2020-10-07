import React from 'react';
import Navbar from './component/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Contacts from './component/contacts/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar title="Contacts list" />
      <Contacts />
     
    </div>
  );
}

export default App;
