// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resset_password from "./pages/Resset_password";
import Home from "./pages/Home";
import Home_owner_account  from "./pages/Home_owner_of_account";
import About_us from "./pages/AboutUs";
import EmailConfirmation from "./pages/Email_confirmation";
import Navbar from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index";

import Manassik from "../src/pages/Manassik";
import Candidature from "./pages/Candidature";
import Candidature_mahram  from "./pages/AddMahram";

import UserProfile from "./pages/UserProfile";
import Home_each_profile from "./pages/Home_each_profile";
import Cansulter_cand from "./pages/Consulter_candidature";
function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homelgin" element={<Home_owner_account />} />  
          <Route path="/candidature" element={<Candidature />} />
          <Route path="/candidature_mahram" element={<Candidature_mahram />} />
          <Route path="/user_profile" element={<UserProfile/>} />
          <Route path="/home_each_profile" element={<Home_each_profile />} /> 
          <Route path="/consulter_cand" element={<Cansulter_cand />} /> 
          <Route path="/nussuki" element={<Manassik />} />
          <Route
            path="/resetPassword/:token"
            element={<Resset_password />}
          />
          <Route path="/mail_conf" element={<EmailConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
