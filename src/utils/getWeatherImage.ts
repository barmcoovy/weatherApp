export const getWeatherImage = (description: string): string => {
  const lower = description.toLowerCase();
  if (lower.includes("clear")) return "sunny.png";
  if (lower.includes("clouds") && lower.includes("few")) return "sun-cloud.png";
  if (lower.includes("broken")) return "broken-clouds.png";
  if (lower.includes("cloud")) return "cloudy.png";
  if (lower.includes("rain") && lower.includes("shower"))
    return "shower-rain.png";
  if (lower.includes("rain")) return "rain.png";
  if (lower.includes("thunderstorm")) return "thunderstorm.png";
  if (lower.includes("snow")) return "snow.png";
  if (lower.includes("mist") || lower.includes("haze") || lower.includes("fog"))
    return "mist.png";

  return "not-found.png"; //Default image value
};
