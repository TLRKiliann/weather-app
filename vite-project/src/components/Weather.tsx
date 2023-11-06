import { FaTemperatureHigh } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";

import { GiWindTurbine, GiWindsock } from "react-icons/gi"
import { BsCloudRain } from "react-icons/bs"
import { DataProps } from '../models/types'

type WeatherProps = {
    weatherData: DataProps;
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
                    <h3>Location&nbsp;<BiCurrentLocation size={24} /></h3>
                    <p>City: {weatherData.location.name}</p>
                    <p>Country: {weatherData.location.country}</p>
                    <p><FaTemperatureHigh />: {weatherData.current.temp_c}°C</p>
                    <p>Feels like: {weatherData.current.feelslike_c}°C</p>
                </div>

                <div className='dataweather--div'>
                    <h3>Wind&nbsp;<GiWindsock size={24} /></h3>
                    <p>Direction: {weatherData.current.wind_dir}</p>
                    <p>Speed: {weatherData.current.wind_kph} km/h</p>
                    <p>Degree: {weatherData.current.wind_degree}°</p>
                </div>

                <div className='dataweather--div'>
                    <h3>Precipitations&nbsp;<BsCloudRain size={24} /></h3>
                    <p>Humidity: {weatherData.current.humidity} %</p>
                    <p>Millimeters: {weatherData.current.precip_mm} mm</p>
                    <p>Pressure: {weatherData.current.pressure_mb} mb</p>
                </div>

                <div className='dataweather--div dataweather--middle'>
                    <h3>Air Quality&nbsp;<GiWindTurbine size={24} /></h3>
                    <p>CO: {weatherData.current.air_quality.co}</p>
                    <p>NO2: {weatherData.current.air_quality.no2}</p>
                    <p>03: {weatherData.current.air_quality.o3}</p>
                    <p>SO2: {weatherData.current.air_quality.so2}</p>
                </div>

            </div>
        </>
    )
}
