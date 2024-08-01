// HomePage.js
import React from 'react';

function HomePage() {
  const handleNavigate = (path) => {
    const fullUrl = `${window.location.origin}${path}`;
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col">
        <button
        className="animated-button-plant"
        onClick={() => handleNavigate('/plant-care')}
      >
        Bitki Bakımı
      </button>
        </div>
        <div className="col">
        <button
        className="animated-button-plant"
        onClick={() => handleNavigate('/plant-identification')}
      >
        Bitki Tanıma
      </button>
        </div>
        <div className="col">
        <button
        className="animated-button-plant"
        onClick={() => handleNavigate('/disease-diagnosis')}
      >
        Hastalık Teşhisi
      </button>
        </div>
      
      </div>
      
    </div>
  );
}

export default HomePage;



