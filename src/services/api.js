import axios from "axios";

const WEATHER_BASE_URL = "https://api.openweathermap.org/";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeatherByCity = async (city) => {
  return await axios
    .get(
      `${WEATHER_BASE_URL}data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
    )
    .then((response) => {
      return response.data;
    });
};
