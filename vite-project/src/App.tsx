import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import DataWeather from './components/DataWeather'
import AlertSection from './components/AlertSection'
import SonarStorm from './components/SonarStorm'
import EmailSender from './components/EmailSender'
import './App.css'

function App() {

  return (
    <>
      
      <div className='maintitle'>
        <h1 className='maintitle--h1'>Weather in real time</h1>
      </div>

      <DateHour />

      <LineChart />

      <DataWeather />

      <AlertSection />

      <SonarStorm />

      <EmailSender />

    </>
  )
}

export default App
