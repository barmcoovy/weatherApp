import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { getWeatherImage } from "./utils/getWeatherImage";

interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; pressure: number };
  wind: { speed: number };
}

const App: React.FC = () => {
  const API_KEY = "529a66f458100a6cb5337e8ad27acadf";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [notFound, setNotFound] = useState(false);

  const getWeatherData = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");

      const data: WeatherData = await res.json();
      setWeatherData(data);
      setNotFound(false);
    } catch (error) {
      setWeatherData(null);
      setNotFound(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl mt-6">Weather App - Bartosz Miecznikowski</h1>

      <div className="mt-[50px] flex flex-row p-4 justify-around gap-4">
        <input
          type="text"
          placeholder="Type your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="outline-none rounded-sm border p-2"
          required
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-2xl"
          onClick={getWeatherData}
        >
          Check Weather
        </button>
      </div>

      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          icon={getWeatherImage(weatherData.weather[0].description)}
          description={weatherData.weather[0].description}
          temperature={Math.round(weatherData.main.temp)}
          wind={weatherData.wind.speed}
          humidity={weatherData.main.humidity}
          pressure={weatherData.main.pressure}
        />
      )}

      {notFound && (
        <div className="flex flex-col items-center justify-center">
          <img src="/assets/not-found.png" alt="not-found" />
          <h1 className="text-xl">Sorry, City not found in our database</h1>
        </div>
      )}
    </div>
  );
};

export default App;
