import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateAccount from "./components/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
