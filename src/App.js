import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Profile from './Componentes/profile';
import Competencias from './Componentes/competencias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/competencias" element={<Competencias />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleClick = () => {
    setShowHome(false); // Oculta o conteúdo da Home
    setLoading(true); // Mostra o spinner
    setTimeout(() => {
      navigate('/profile')
    }, 2000); // Tempo de espera simulado
  };

  return (
    <div className="App">
      <div className="container">
        {showHome ? (
          <>
            <header className="App-header">
            </header>
            <button onClick={handleClick}>generate</button>
          </>
        ) : (
          loading && (
            <div className="spinner">
              <div className="terminal-loader">
                <div className="terminal-header">
                  <div className="terminal-title">Status</div>
                  <div className="terminal-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                  </div>
                </div>
                <div className="text">Loading...</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
