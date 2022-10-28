import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Motive from "./pages/Motive"
import Motivation from "./pages/Motivation"
import Movement from "./pages/Movement"
import Profile from "./pages/Profile"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="motive" element={ <Motive/> } />
        <Route path="movement" element={ <Movement/> } />
        <Route path="motivation" element={ <Motivation/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
