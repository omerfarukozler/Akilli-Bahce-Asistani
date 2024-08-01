// src/api.js
const API_KEY = 'zwjyouylxEPNu4oJj8q0n6wbn5d3GGS4OXwbmxAeykyEHk2Ypj';
const BASE_URL = 'https://plant.id/api/v3';

const identifyPlant = async (image) => {
  const formData = new FormData();
  formData.append('images', image);
  formData.append('organs', 'leaf'); // örnek olarak

  try {
    const response = await fetch(`${BASE_URL}/identify`, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error identifying plant:', error);
    throw error;
  }
};

export { identifyPlant };

