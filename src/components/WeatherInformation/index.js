import "./index.scss";

const WeatherInformation = ({ weatherData }) => {

    return (
        <div className="container">
            <h1>Temperature</h1>
            <div className="temperature-info">
                <p>Max:</p>
                <p>{Math.round(weatherData.main.temp_max)} ℃</p>
                <p>Min:</p>
                <p>{Math.round(weatherData.main.temp_min)} ℃</p>
                <p>Feels like:</p>
                <p>{Math.round(weatherData.main.feels_like)} ℃</p>
            </div>
            <hr />
            <h1>Details</h1>
            <div className="details-info">
                <p>Atmospheric pressure:</p>
                <p>{weatherData.main.pressure} hPa</p>
                <p>Air humidity:</p>
                <p>{weatherData.main.humidity} %</p>
                <p>Wind Speed:</p>
                <p>{Math.round(weatherData.wind.speed)} kph</p>
            </div>
        </div>
    )
}

export default WeatherInformation