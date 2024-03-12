
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index';
import Resset from "./pages/Resetpassword";
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route
            path="/login"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="login"
                  timeout={1000}
                  classNames="page"
                >
                  <Login />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/signup"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="signup"
                  timeout={1000}
                  classNames="page"
                >
                  <Signup />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route path='/dashboard' element={<Dashboard/>}></Route>

          <Route path="/resset_pssw" element={< Resset/>} />

          <Route path="/home" element={<Home/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
