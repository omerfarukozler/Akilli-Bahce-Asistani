import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage'; // Yeni bileşeni içe aktar
import PlantCare from './PlantCare';
import PlantIdentification from './PlantIdentification';
import DiseaseDiagnosis from './DiseaseDiagnosis';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/plant-identification" element={<PlantIdentification />} />
          <Route path="/disease-diagnosis" element={<DiseaseDiagnosis />} />
        </Routes>
      </div>
    </Router>
  );
}

// Ana sayfa bileşeni
function MainPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // HomePage rotasına yönlendirir
  };

  return (
    <div>
      <h1 className="animated-text">Akıllı Bitki Asistanına Hoşgeldiniz</h1>
      <button className="animated-button" onClick={handleClick}>Haydi Başlayalım</button>
    </div>
  );
}

export default App;

