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
  name: "London",
  weather: [
    {
      main: "Clouds",
    },
  ],
  main: {
    temp: 19.81,
    temp_max: 22.06,
    temp_min: 15.81,
    humidity: 53,
  },
  wind: {
    speed: 3.6,
  },
};

export const MOCK_DAILY_FORECAST = [
  {
    id: 1,
    time: "10:00",
    weather: [
      {
        main: "Clouds",
      },
    ],
    main: {
      temp: 31.93,
    },
  },
  {
    id: 2,
    time: "11:00",
    weather: [
      {
        main: "Clouds",
      },
    ],
    main: {
      temp: 31.93,
    },
  },
  {
    id: 3,
    time: "12:00",
    weather: [
      {
        main: "Clouds",
      },
    ],
    main: {
      temp: 31.93,
    },
  },
  {
    id: 4,
    time: "00:00",
    weather: [
      {
        main: "Clouds",
      },
    ],
    main: {
      temp: 31.93,
    },
  },
  {
    id: 5,
    time: "01:00",
    weather: [
      {
        main: "Clouds",
      },
    ],
    main: {
      temp: 31.93,
    },
  },
];
