// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resset_password from "./pages/Resset_password";
import Home from "./pages/Home";
import AddAdmin from "./pages/AdminPages/RecentAdmin"
import Home_owner_account  from "./pages/Home_owner_of_account";
import About_us from "./pages/AboutUs";
import EmailConfirmation from "./pages/Email_confirmation";
import Navbar from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AuthContextProvider } from './context/authContext'; // Assuming your context file path
import "./index";

import SousSession from "./pages/SousSession"
import RequireAuth from "./protectingRoutes/RequireAuth";
import Manassik from "../src/pages/Manassik";
import Candidature from "./pages/Candidature";
import Candidature_mahram  from "./pages/AddMahram";
import UserProfile from "./pages/UserProfile";
import Home_each_profile from "./pages/Home_each_profile";
import Cansulter_cand from "./pages/Consulter_candidature";
import Dash from "../src/pages/Dash_pages/Dashboard_Main"
import Sous_Dash from "./pages/Dash_pages/Dashboard_sous";
import Medecins from "./pages/Medecins";
import RecentAdmin from "./pages/AdminPages/RecentAdmin";
import Session from "./pages/Session"
import Candidat from "./pages/Candidat"
import Pelerin from "./pages/Pelerin"

import SousTirage from "./pages/SousTirage"
import SousPelerin from "./pages/SousPelerin"
import SousCandidat from "./pages/SousCandidat"

function App() {
  const isLoggedIn=localStorage.getItem('loggedIn')
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/medecin" element={<Medecins/>} />
          <Route path="/RecentAdmin" element={<RecentAdmin/>} />
          <Route path="/Session" element={<Session/>} />
          <Route path="/Candidat" element={<Candidat/>} />
          <Route path="/Pelerin" element={<Pelerin/>} />


          <Route path="/SousSession" element={<SousSession/>} />
          <Route path="/SousTirage" element={<SousTirage/>} />
          <Route path="/SousPelerin" element={<SousPelerin/>} />
          <Route path="/SousCandidat" element={<SousCandidat/>} />


          <Route path="/homelgin" element={<RequireAuth><Home_owner_account /></RequireAuth>} />  
          <Route path="/candidature" element={<RequireAuth><Candidature /></RequireAuth>} />
          <Route path="/candidature_mahram" element={<RequireAuth><Candidature_mahram /></RequireAuth>} />
          <Route path="/user_profile" element={<RequireAuth><UserProfile/></RequireAuth>} />
          <Route path="/home_each_profile" element={<RequireAuth><Home_each_profile /></RequireAuth>} /> 
          <Route path="/consulter_cand" element={<RequireAuth><Cansulter_cand /></RequireAuth>} /> 
          <Route path="/nussuki" element={<Manassik />} />
          <Route
            path="/resetPassword/:token"
            element={<Resset_password />}
          />
          <Route path="/mail_conf" element={<EmailConfirmation />} />
          <Route path="/dash" element={<Dash/>}></Route>
          <Route path="/sousdash" element={<AuthContextProvider>< Sous_Dash/></AuthContextProvider>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
