import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import DataWeather from './components/DataWeather'
import AlertSection from './components/AlertSection'
import SonarStorm from './components/SonarStorm'
import EmailSender from './components/EmailSender'
import meteo from '/images/meteo.jpg'
import apiLogo from '/images/weatherapi_logo.jpg'

function App() {

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
      <DataWeather />
      <hr />
      <LineChart />
      <hr />
      <AlertSection />
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
