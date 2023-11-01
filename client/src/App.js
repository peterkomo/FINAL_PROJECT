import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateAccount from "./components/signup";
import LoginPage from "./components/login";
import Homepage from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/Home" element={<Homepage/>} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
