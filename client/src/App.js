// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import resset_passw from "./pages/Resetpassword";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index";
import Resset from "./pages/Resetpassword";


import Manassik from "../src/pages/Manassik";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
      
        
        <Route path="/home" element={<Home />} />
          <Route path="/nussuki" element={<Manassik />} />
          <Route path="/resset_pssw" element={<Resset />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
