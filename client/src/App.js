// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resset_password from "./pages/Resset_password";
import Home from "./pages/Home";
import Home_log_in  from "./pages/Homelgin";
import About_us from "./pages/AboutUs";
import EmailConfirmation from "./pages/Email_confirmation";
import Navbar from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index";
import Manassik from "../src/pages/Manassik";
import Candidature from "./pages/Candidature";
import UserProfile from "./pages/UserProfile";
function App() {
  const isLoggedIn=localStorage.getItem('loggedIn')
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homelgin" element={isLoggedIn==="true"?<Home_log_in />: <Home/>} />  
          <Route path="/candidature" element={<Candidature />} />
          <Route path="/user_profile" element={<UserProfile/>} />

          <Route path="/nussuki" element={<Manassik />} />
          <Route
            path="/resetPassword/:id/:token"
            element={<Resset_password />}
          />
          <Route path="/mail_conf" element={<EmailConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
