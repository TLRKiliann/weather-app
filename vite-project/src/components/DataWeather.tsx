import './styles/DataWeather.css'

export default function DataWeather() {
  return (
    <section className='dataweather'>

      <div className='dataweather--div'>
        <p>T C°:{""}</p>
        <p>Wind:{""}</p>
      </div>

      <div className='dataweather--div'>
        <p>Humidity: {""}</p>
        <p>Rain: {""}</p>
      </div>

    </section>
  )
}
