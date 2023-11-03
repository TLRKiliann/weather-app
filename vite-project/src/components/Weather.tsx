type LittleDataProps = {
    weather: {description: string}[];
    name: string;
    main: {temp: string};
    sys: {
        sunrise: string;
        sunset: string;
    }
}

type WeatherProps = {
    weatherData: LittleDataProps;
}

export default function Weather({weatherData}: WeatherProps) {

    let sunriseInit = weatherData.sys.sunrise;
    let date = new Date(sunriseInit * 1000);
    let resultSunrise = date.toLocaleTimeString();


    let sunsetInit = weatherData.sys.sunset;
    let dateSunset = new Date(sunsetInit * 1000);
    let resultSunset = dateSunset.toLocaleTimeString();

    return (
        <>
            <div className='dataweather--div'>
                <p className="header">City Name: {weatherData.name}</p>
                <p>Temperature: {weatherData.main.temp} °C</p>
            </div>

            <div className='dataweather--div'>
                <p>Sunrise: {resultSunrise}</p>
                <p>Sunset: {resultSunset}</p>
            </div>

            <div className='dataweather--div'>
                <p>Description: </p>
                <p>{weatherData.weather[0].description}</p>
            </div>
        </>
    )
}
