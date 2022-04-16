import "./index.scss";

const WeatherInformation = ({ weatherData }) => {

    return (
        <div className="container">
            <div classname="temperature-info">
                <h1>Temperature</h1>
                <p>Max: {Math.round(weatherData.main.temp_max)}</p>
                <p>Min: {Math.round(weatherData.main.temp_min)}</p>
                <p>Feels like: {Math.round(weatherData.main.feels_like)}</p>
            </div>
            <div className="details-info">
                <h1>Details</h1>
                <p>Atmospheric pressure: {weatherData.main.pressure}</p>
                <p>Air humidity: {weatherData.main.humidity}</p>
                <p>Wind Speed: {weatherData.wind.speed}</p>
            </div>
        </div>
    )
}

export default WeatherInformation