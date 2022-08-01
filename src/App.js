import logo from './logo.svg';
import './App.css';
import Form from './Pages/Form';
import React from 'react';
import Registration from './Pages/Registration';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AllRoutes/> */}
        <Form/>
      </header>
    </div>
  );
}

export default App;


