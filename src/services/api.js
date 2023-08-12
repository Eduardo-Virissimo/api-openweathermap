import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const fetchWeather = async (city) => {
  try {
    const response = await api.get(`weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
