// App.js
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
  
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index';
import Resset from "./pages/Resetpassword";
import Hero from './pages/Hero';
function App() {
  return (
    <Router>
      <div className="App">
         <Navbar/>
         <Home/>
         
        <Routes>
        
          <Route path="/resset_pssw" element={< Resset/>} />
          <Route path="/home" element={< Home/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
