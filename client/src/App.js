import { useHistory } from "react-router-dom";
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
import RequireNotAuth from "./protectingRoutes/RequireNotAuth";
import RequireAuthSsA from "./protectingRoutes/RequireAuthSsAdmin";
import RequireMasterAdmin from "./protectingRoutes/RequireMasterAdmin"
import AttentePelerin from "./pages/AttentePelerin"
import Manassik from "../src/pages/Manassik";
import Candidature from "./pages/Candidature";
import Candidature_mahram  from "./pages/AddMahram";
import UserProfile from "./pages/UserProfile";
import Home_each_profile from "./pages/Home_each_profile";
import Cansulter_cand from "./pages/Consulter_candidature";
import SousDash from "./pages/Dash_pages/Dashboard_sous";
import Dash from "../src/pages/Dash_pages/Dashboard_Main";
import Medecins from "./pages/Medecins";
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
        <Route path="/" element={<Home />} />
        <Route path="/homemedecin" element={<HomeMedecin/>} />
        <Route path="/listepelerin" element={<ListePelerin />} />
        <Route path="/AddAdmin" element={<AddAdmin />} />
        <Route path="/sante" element={<EtatSantee />} />
        <Route path="/paiment" element={<Paiment/>} />
        <Route path="/carteccp" element={<Carteccp/>} />
        <Route path="/virementccp" element={<Virementccp/>} />
        <Route path="/paimentVP" element={<PaimentVersementPostale />} />
        <Route path="/paimentcarteccp" element={<Paimentcarteccp />} />
        <Route path="/pelerinsMed" element={<VisiteMedical/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/medecin" element={<Medecins/>} />
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
     
          <Route path="/sousdash" element={<RequireAuthSsA><SousDash/></RequireAuthSsA>}></Route>
          <Route path="/dash" element={<RequireMasterAdmin><Dash/></RequireMasterAdmin>}></Route>
        



          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

