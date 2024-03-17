// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resset_password from "./pages/Resset_password";
import Home from "./pages/Home";
import EmailConfirmation from './pages/Email_confirmation';

import Navbar from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index";


import Manassik from "../src/pages/Manassik";
function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nussuki" element={<Manassik />} />
          <Route path="/resetPassword" element={< Resset_password/>} />
          <Route path="/mail_conf" element={< EmailConfirmation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
