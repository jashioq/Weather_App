import { useEffect, useState } from "react"
import "./Homepage.scss"
import SearchField from "../components/SearchField"
import LinkButton from "../components/LinkButton"
import WeatherDescription from "../components/WeatherDescription"
import WeatherInformation from "../components/WeatherInformation"

const Homepage = () => {
  const [city, setCity] = useState('Globe')
  const [weatherData, setWeatherData] = useState(null)

  const API_KEY = "763b782a1fdd9b7b8f0c5bf2979dee4b"
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  useEffect(() => {  // Dynamic backrounds
    document.body.style.backgroundImage =
      weatherData
        ? `url('./images/${weatherData.weather[0].icon}.png')`
        : "url('./images/02d.png')"
  }, [weatherData])

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    { jsonData.cod != 404 ? setWeatherData(jsonData) : setWeatherData(null) }
    setCity('')
  }

  const handleCitySearch = (event) => {
    if (event.key === 'Enter' && city !== '') {
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