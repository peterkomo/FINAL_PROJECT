import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home"; 

function App() {
  return (
    <Router>
      <div className="App">
        
          
          <Route  exact path="Home" element={< Home/>} />
        
      </div>
    </Router>
  );
}

export default App;
