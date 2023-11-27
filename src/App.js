import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import History from './pages/History';
import Report from './pages/Report';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/History" element={<History/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Logout" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;