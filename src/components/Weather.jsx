import { useEffect, useState } from "react";

export default function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  const API_KEY = "2acfa4d4cd806f3d726c37939b4f1bca"

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  if (!weather || weather.cod !== 200) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mt-8">

      <h2 className="text-2xl font-bold mb-4">
        🌤 Live Weather
      </h2>

      <p>
        📍 {weather.name}
      </p>

      <p>
        🌡 Temperature: {weather.main.temp}°C
      </p>

      <p>
        💧 Humidity: {weather.main.humidity}%
      </p>

      <p>
        💨 Wind: {weather.wind.speed} km/h
      </p>

      <p>
        ☁ {weather.weather[0].description}
      </p>

    </div>
  );
}