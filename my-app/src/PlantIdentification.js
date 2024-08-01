import React, { useState } from 'react';
import { identifyPlant } from './api';

function PlantIdentification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    try {
      const data = await identifyPlant(selectedFile);
      setResult(data);
    } catch (error) {
      setResult('Error identifying the plant.');
    }
  };

  return (
    <div className="App">
      <h1>Bitki Tanıma</h1>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Bitki Tanıma</button>
      {result && <div><h2>Sonuç:</h2><pre>{JSON.stringify(result, null, 2)}</pre></div>}
    </div>
  );
}

export default PlantIdentification;
