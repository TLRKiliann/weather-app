import { useEffect, useState } from "react";
import Weather from './components/Weather';
import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import AlertSection from './components/AlertSection'
import EmailSender from './components/EmailSender'
import { DataProps } from './models/types'
import meteo from '/images/meteo.jpg'
import apiLogo from '/images/weatherapi_logo.jpg'

function App() {

  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState<boolean>(false)

  console.log(data, "data")

  const api_url_2 = "https://api.weatherapi.com/v1"
  const api_key_2 = "f9cc795ef9de4a8182590531230411"

  
  useEffect(() => {
    setLoading(true)
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

      {loading === true ? (
        <p>Loadding</p>
      ): null }

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
