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
                    <span className="titles">
                        <h3 className="titles--h3">Location</h3>
                        <BiCurrentLocation size={24} />
                    </span>
                    <p className="paragraph">City: {weatherData.location.name}</p>
                    <p className="paragraph">Country: {weatherData.location.country}</p>
                    <p className="paragraph"><FaTemperatureHigh />: {weatherData.current.temp_c}°C</p>
                    <p className="paragraph">Feels like: {weatherData.current.feelslike_c}°C</p>
                </div>

                <div className='dataweather--div'>
                    <span className="titles">
                        <h3 className="titles--h3">Wind</h3>
                        <GiWindsock size={24} />
                    </span>
                    <p className="paragraph">Direction: {weatherData.current.wind_dir}</p>
                    <p className="paragraph">Speed: {weatherData.current.wind_kph} km/h</p>
                    <p className="paragraph">Degree: {weatherData.current.wind_degree}°</p>
                </div>

                <div className='dataweather--div'>
                    <span className="titles">
                        <h3 className="titles--h3">Precipitations</h3>
                        <BsCloudRain size={24} />
                    </span>
                    <p className="paragraph">Humidity: {weatherData.current.humidity} %</p>
                    <p className="paragraph">Millimeters: {weatherData.current.precip_mm} mm</p>
                    <p className="paragraph">Pressure: {weatherData.current.pressure_mb} mb</p>
                </div>

                <div className='dataweather--div dataweather--middle'>
                    <span className="titles">
                        <h3 className="titles--h3">Air Quality</h3>
                        <GiWindTurbine size={24} />
                    </span>
                    <p className="paragraph">CO: {weatherData.current.air_quality.co}</p>
                    <p className="paragraph">NO2: {weatherData.current.air_quality.no2}</p>
                    <p className="paragraph">03: {weatherData.current.air_quality.o3}</p>
                    <p className="paragraph">SO2: {weatherData.current.air_quality.so2}</p>
                </div>

            </div>
        </>
    )
}
