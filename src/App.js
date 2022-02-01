import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <div className="main-div">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
