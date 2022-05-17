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
