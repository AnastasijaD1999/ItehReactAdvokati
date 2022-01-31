import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="main-div">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
