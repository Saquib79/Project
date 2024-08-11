// client/src/App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Form />
      <Dashboard />
    </div>
  );
};

export default App;
