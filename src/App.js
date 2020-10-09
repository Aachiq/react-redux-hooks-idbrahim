import React, { useState } from 'react';
import { UserContext } from './context/UserContext';
import Product from './component/Product'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <UserContext.Provider value={loggedIn}>
            <Product />
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
