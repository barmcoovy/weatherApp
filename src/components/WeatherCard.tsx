import React from "react";

interface WeatherCardProps {
  city: string;
  icon: string;
  description: string;
  temperature: number;
  wind: number;
  humidity: number;
  pressure: number;
}
const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  icon,
  description,
  temperature,
  wind,
  humidity,
  pressure,
}) => {
  return (
    <div className="border border-black w-[340px] h-[440px] flex flex-col items-center justify-evenly rounded-xl">
      <h1 className="text-3xl">{city}</h1>
      <img className="w-[150px] h-[150px]" src={icon} alt="weather-icon" />
      <p className="text-[1.2rem]">{description}</p>
      <h4 className="text-2xl">{temperature}°C</h4>
      <div className="flex flex-row gap-4 text-[1.1rem]">
        <span>
          <i className="fa-solid fa-wind"></i> {wind} m/s
        </span>
        <span>💧 {humidity}%</span>
        <span>🧭 {pressure} hPa</span>
      </div>
    </div>
  );
};

export default WeatherCard;
