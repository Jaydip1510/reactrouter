import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/About_us';
import Contect_us from './components/Contect_us';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/Index';


function App() {
  return (
    <div className="App">
        <h3>React router</h3>
        <Index/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/about" element={<About_us/>}>About_Us</Route>
          <Route path="/contect" element={<Contect_us/>}>Contect_Us</Route>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/signup" element={<Signup/>}>Sign_Up</Route>
        </Routes>
      
    </div>
  );
}

export default App;
