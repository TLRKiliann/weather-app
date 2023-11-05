import { useEffect, useState } from "react";
import Weather from './components/Weather';
import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import AlertSection from './components/AlertSection'
import SonarStorm from './components/SonarStorm'
import EmailSender from './components/EmailSender'
import meteo from '/images/meteo.jpg'
import apiLogo from '/images/weatherapi_logo.jpg'

type DataProps = {
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
  };
}

function App() {

  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState<boolean>(true)

  console.log(data, "data")

  const api_url_2 = "https://api.weatherapi.com/v1"
  const api_key_2 = "f9cc795ef9de4a8182590531230411"

  useEffect(() => {
    if (loading === true) {
      const fetchData = async() => {
        await fetch(`${api_url_2}/current.json?key=${api_key_2}&q=Lausanne&aqi=yes`)
        .then((res) => res.json())
        .then((rslt) => {
          setData(rslt)
          console.log(rslt)
          setLoading(false)
        })
      }
      fetchData();
    }
  }, [])

  return (
    <>
      <span className='img--span'>
        <img
          src={meteo}
          width="100%"
          height="100%"
          className='img--meteo'
          alt="img meteo"
        />
      </span>

      <header className='maintitle'>
        <h1 className='maintitle--h1'>Weather in Lausanne</h1>
      </header>
      
      <DateHour />
      <hr />

      <section className='dataweather--section'>
        {(typeof data?.location != 'undefined') ? (
          <Weather weatherData={data} />
        ) : (
          <div>No response from API</div>
        )}
      </section>

      <hr />
      <LineChart />
      <hr />

      {(typeof data?.location != 'undefined') ? (
        <AlertSection weatherData={data} />
      ) : (
        <div>No response from API</div>
      )}

      <hr />
      <SonarStorm />
      <hr />
      <EmailSender />

      <footer>
        <span className='apilogo'>
          <img 
            src={apiLogo} 
            width="100%"
            height="100%"
            alt="logo of API"
            className='apilogo--img' />
        </span>
      </footer>

    </>
  )
}

export default App
