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
import AttentePelerin from "./pages/AttentePelerin"
import RequireNotAuth from "./protectingRoutes/RequireNotAuth";
import RequireMasterAdmin from "./protectingRoutes/RequireMasterAdmin"
import RequireAuthSsA from "./protectingRoutes/RequireAuthSsAdmin";
import RequireAuthMed from "./protectingRoutes/RequireAuthMed";
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


import { useHistory } from "react-router-dom";
import Sidebar from "../src/components/Dash_components/shared/Sidebar"
import EtatSantee from "./pages/EtatSantee";
import VisiteMedical from "./pages/Medpages/VisiteMedical";
import ListePelerin from "./pages/Medpages/ListePelerin";
import HomeMedecin from "./pages/Medpages/Home";

import PaimentVersementPostale from "./pages/PaimentVersementPostale";
import Paimentcarteccp from "./pages/Paimentcarteccp";
import Paiment from "./pages/AdminPages/Paiment";
import Carteccp from "./pages/AdminPages/Carteccp";
import Virementccp from "./pages/AdminPages/Virementccp";




function App() {
  const isLoggedIn=localStorage.getItem('loggedIn')
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/AddAdmin" element={<RequireAuth><AddAdmin /></RequireAuth>} />
          <Route path="/" element={<RequireNotAuth><Home /></RequireNotAuth>} />
          <Route path="/AttentePelerin" element={<RequireMasterAdmin><AttentePelerin/></RequireMasterAdmin>} />
          <Route path="/home" element={<RequireNotAuth><Home /></RequireNotAuth>} />
          <Route path="/SousSession" element={<RequireAuthSsA><SousSession/></RequireAuthSsA>} />
          <Route path="/SousTirage" element={<RequireAuthSsA><SousTirage/></RequireAuthSsA>} />
          <Route path="/SousPelerin" element={<RequireAuthSsA><SousPelerin/></RequireAuthSsA>} />
          <Route path="/SousCandidat" element={<RequireAuthSsA><SousCandidat/></RequireAuthSsA>} />
          <Route path="/medecin" element={<RequireMasterAdmin><Medecins/></RequireMasterAdmin>} />
          <Route path="/RecentAdmin" element={<RequireMasterAdmin><RecentAdmin/></RequireMasterAdmin>} />
          <Route path="/Session" element={<RequireMasterAdmin><Session/></RequireMasterAdmin>} />
          <Route path="/Candidat" element={<RequireMasterAdmin><Candidat/></RequireMasterAdmin>} />
          <Route path="/Pelerin" element={<RequireMasterAdmin><Pelerin/></RequireMasterAdmin>} />
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

          <Route path="/dash" element={<RequireMasterAdmin><Dash/></RequireMasterAdmin>}></Route>
          <Route path="/sousdash" element={<RequireAuthSsA><Sous_Dash/></RequireAuthSsA>}></Route>
          <Route path="/homemedecin" element={<RequireAuthMed><HomeMedecin/></RequireAuthMed>} />
          <Route path="/listepelerin" element={<RequireAuthMed><ListePelerin /></RequireAuthMed>} />

          <Route path="/sante" element={<RequireAuth><EtatSantee /></RequireAuth>} />
          <Route path="/paiment" element={<RequireMasterAdmin><Paiment/></RequireMasterAdmin>} />
          <Route path="/carteccp" element={<Carteccp/>} />
          <Route path="/virementccp" element={<Virementccp/>} />
          <Route path="/paimentVP" element={<RequireAuth><PaimentVersementPostale /></RequireAuth>} />
          <Route path="/paimentcarteccp" element={<RequireAuth><Paimentcarteccp /></RequireAuth>} />
          <Route path="/pelerinsMed" element={<RequireAuthMed><VisiteMedical/></RequireAuthMed>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

