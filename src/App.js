import Login from './Components/Login';
import Cars from './Components/Cars';

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Menu from './Components/Menu';

function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Menu" element={<Menu />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
