import "./index.scss";

const WeatherDescription = ({ weatherData }) => {

    return (
        <div>
            <p>{weatherData.weather[0].main}</p>
            <p>{weatherData.weather[0].description}</p>
        </div>
    )
}

export default WeatherDescription
