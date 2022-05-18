export const icons = {
  Thunderstorm: "wi wi-day-thunderstorm",
  Drizzle: "wi wi-sprinkle",
  Rain: "wi wi-day-rain",
  Snow: "wi wi-day-snow",
  Clear: "wi wi-day-sunny", //"wi-night-clear"
  Clouds: "wi wi-day-cloudy",
};

export const formatDate = (time) => {
  const date = time.slice(0, 10);
  const getDate = new Date(date).toLocaleDateString();
  return getDate.slice(0, 5);
};

export const MOCK_CURRENT_WEATHER = {
  cityName: "London",
  humidity: 53,
  temp: 19.81,
  tempMax: 22.06,
  tempMin: 15.81,
  weatherDescription: "Clouds",
  windSpeed: 3.6,
};

export const MOCK_DAILY_FORECAST = [
  {
    id: 1,
    date: "17/05",
    weatherDescription: "Clouds",
    temp: 31.93,
  },
  {
    id: 2,
    date: "18/05",
    weatherDescription: "Clouds",
    temp: 14.18,
  },
  {
    id: 3,
    date: "19/05",
    weatherDescription: "Rain",
    temp: 12.59,
  },
  {
    id: 4,
    date: "20/05",
    weatherDescription: "Clouds",
    temp: 14.19,
  },
];
