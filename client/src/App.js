import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/Homepage" element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
