import React from 'react';
import Navbar from './component/navbar/Navbar';
import Contacts from './component/contacts/Contacts';
import { Provider } from './component/Provider'
import AddContact from './component/contacts/AddContact';
import About from './component/pages/About';
import PageNotFound from './component/pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar title="Contacts list" />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/about/:id/:name" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
