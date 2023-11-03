import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import DataWeather from './components/DataWeather'
import AlertSection from './components/AlertSection'
import SonarStorm from './components/SonarStorm'
import EmailSender from './components/EmailSender'
import meteo from '/images/meteo.jpg'


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
        <h1 className='maintitle--h1'>Weather in real time</h1>
      </header>
      
      <DateHour />
      <hr />
      <LineChart />
      <hr />
      <DataWeather />
      <hr />
      <AlertSection />
      <hr />
      <SonarStorm />
      <hr />
      <EmailSender />

      <footer>
        <p>cat.3st3ban@gmail.com</p>
      </footer>

    </>
  )
}

export default App
