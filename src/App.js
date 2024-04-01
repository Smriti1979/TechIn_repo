import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Login/>}/>
        <Route path= "/CreateAccount" element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;