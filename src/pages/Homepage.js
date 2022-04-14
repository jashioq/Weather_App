import { useState, useEffect } from "react"
import SearchField from "../components/SearchField"
import LinkButton from "../components/LinkButton"
import WeatherDescription from "../components/WeatherDescription"
import WeatherInformation from "../components/WeatherInformation"

const Homepage = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const API_KEY = "763b782a1fdd9b7b8f0c5bf2979dee4b"
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`


  const fetchWeather = async () => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    { jsonData.cod != 404 ? setWeatherData(jsonData) : setWeatherData(null) }
    setCity('')
  }

  const handleCitySearch = (event) => {
    if (event.key === 'Enter' && city != '') {
      fetchWeather()
    }
  }

  return (
    <div>
      <LinkButton name="About" path="/about" />
      <SearchField city={city} setCity={(value) => setCity(value)} onPress={handleCitySearch} />
      {weatherData ? <WeatherDescription weatherData={weatherData} /> : ""}
      {weatherData ? <WeatherInformation weatherData={weatherData} /> : ""}
    </div>
  )
}

export default Homepage