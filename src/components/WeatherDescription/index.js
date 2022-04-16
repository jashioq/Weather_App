import "./index.scss";

const WeatherDescription = ({ weatherData }) => {

    return (
        <div className="container-desc">
            <p className="temperature-main">{Math.round(weatherData.main.temp)}°</p>
            <p className="city-name">{weatherData.name}</p>
            <p className="weather-desc">{weatherData.weather[0].description}</p>
        </div>
    )
}

export default WeatherDescription
