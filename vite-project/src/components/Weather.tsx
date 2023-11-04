type LittleDataProps = {
    location: {
        name: string;
        country: string;
    }
    current: {
        temp_c: number;
        feelslike_c: number;
        wind_dir: number;
        wind_kph: number;
        wind_degree: number;
        humidity: number;
        precip_mm: number;
        pressure_mb: number;
        uv: number;
        air_quality: {
            co: number;
            no2: number;
            o3: number;
            so2: number;
        }
        condition: {
            text: string;
            icon: string;
        }
    }
}

type WeatherProps = {
    weatherData: LittleDataProps;
}

export default function Weather({weatherData}: WeatherProps) {

    return (
        <>
            <div className="forecast">

                <div className='forecast--container'>
                    <p className="forecast--title">{weatherData.current.condition.text}</p>
                    <span className="forecast--span">
                        <img 
                            src={weatherData.current.condition.icon} 
                            width="50%" height="50%" 
                            alt="icon"
                            className="forecast--img"
                        />
                    </span>
                    <p className="forecast--uv">UV: {weatherData.current.uv}</p>
                </div>

            </div>

            <div className="dataweather">

                <div className='dataweather--div'>
                    <h3>Location</h3>
                    <p>City: {weatherData.location.name}</p>
                    <p>Country: {weatherData.location.country}</p>
                    <p>Temperature(°C): {weatherData.current.temp_c}°</p>
                    <p>Feels like: {weatherData.current.feelslike_c}°</p>
                </div>

                <div className='dataweather--div'>
                    <h3>Wind</h3>
                    <p>Direction: {weatherData.current.wind_dir}</p>
                    <p>Speed: {weatherData.current.wind_kph} km/h</p>
                    <p>Degree: {weatherData.current.wind_degree}°</p>
                </div>

                <div className='dataweather--div'>
                    <h3>Precipitations</h3>
                    <p>Humidity: {weatherData.current.humidity} %</p>
                    <p>Millimeters: {weatherData.current.precip_mm} mm</p>
                    <p>Pressure: {weatherData.current.pressure_mb} mb</p>
                </div>

                <div className='dataweather--div dataweather--middle'>
                    <h3>Air Quality</h3>
                    <p>CO: {weatherData.current.air_quality.co}</p>
                    <p>NO2: {weatherData.current.air_quality.no2}</p>
                    <p>03: {weatherData.current.air_quality.o3}</p>
                    <p>SO2: {weatherData.current.air_quality.so2}</p>
                </div>

            </div>
        </>
    )
}
