import React, { useState } from 'react';
import { fetchWeather } from '../services/api';
import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake } from 'react-icons/fa';

function WeatherCard() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getWeatherIcon = () => {
    if (!weatherData) return null;
    const weatherCode = weatherData.weather[0].id;

    let icon;

    switch (weatherCode) {
      case 800:
        icon = <FaSun size={48} />;
        break;

      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        icon = <FaBolt size={48} />;
        break;

      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
      case 520:
      case 521:
      case 522:
      case 531:
        icon = <FaCloudRain size={48} />;
        break;

      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
        icon = <FaCloudRain size={48} />;
        break;

      case 511:
      case 615:
      case 616:
        icon = <FaSnowflake size={48} />;
        break;

      default:
        icon = <FaCloud size={48} />;
        break;
    }

    return icon;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-black p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Previsão do Tempo
        </h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            className="border text-primary rounded p-2 w-full focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded px-4 py-2 ml-2 focus:outline-none"
            onClick={handleFetchWeather}
          >
            Buscar
          </button>
        </div>
        {weatherData && (
          <div className="text-center">
            <p className="text-lg text-gray-800">
              Cidade: {weatherData.name}
            </p>
            <div className="flex items-center justify-center mt-2">
              <p className="ml-2 text-xl text-gray-800">
                {weatherData.main.temp.toFixed(1)}°C
              </p>
            </div>
            <p className="text-lg text-gray-800">
              Condição: {weatherData.weather[0].description}
            </p>
            <div className='items-center justify-center flex pt-2'>
              {getWeatherIcon()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
