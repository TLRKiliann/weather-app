import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import DataWeather from './components/DataWeather'
import AlertSection from './components/AlertSection'
import SonarStorm from './components/SonarStorm'
import EmailSender from './components/EmailSender'


function App() {

  return (
    <>
      
      <header className='maintitle'>
        <h1 className='maintitle--h1'>Weather in real time</h1>
      </header>
      <hr />
      <DateHour />

      <LineChart />

      <DataWeather />
      <hr />
      <AlertSection />
      <hr />
      <SonarStorm />
      <hr />
      <EmailSender />

    </>
  )
}

export default App
