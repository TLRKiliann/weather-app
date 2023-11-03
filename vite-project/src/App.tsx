import DateHour from './components/DateHour'
import LineChart from "./components/LineChart"
import './App.css'

function App() {

  return (
    <>
      
      <div className='maintitle'>
        <h1 className='maintitle--h1'>Weather in real time</h1>
      </div>

      <DateHour />

      <div>
        <LineChart />

        <LineChart />
      </div>

    </>
  )
}

export default App
