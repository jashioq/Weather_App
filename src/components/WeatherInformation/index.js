import "./index.scss";

const WeatherInformation = ({ weatherData }) => {

    return (
        <div>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Feels like: {weatherData.main.feels_like}</p>
            <p>Min temperarure: {weatherData.main.temp_min}</p>
            <p>Max temperarure: {weatherData.main.temp_max}</p>
            <p>Atmospheric pressure: {weatherData.main.pressure}</p>
            <p>Air humidity: {weatherData.main.humidity}</p>
        </div>
    )
}

export default WeatherInformation