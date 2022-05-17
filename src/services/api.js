import axios from "axios";

const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeatherByCity = async (city) => {
  return await axios
    .get(
      `${WEATHER_BASE_URL}weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getNextDaysWeatherByCity = async (city) => {
  return await axios
    .get(
      `${WEATHER_BASE_URL}forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    )
    .then((response) => {
      return response.data;
    });
};
