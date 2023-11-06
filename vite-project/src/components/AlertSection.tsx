import { DataProps } from '../models/types'

type WeatherProps = {
  weatherData: DataProps;
}

export default function AlertSection({weatherData}: WeatherProps) {

  const windData = weatherData.current.wind_kph;
  const tempData = weatherData.current.temp_c;

  if ((windData < 30) && (tempData < 27 && tempData > 2) ) {
    return (
      <section className="alert">
        <h2 className="alert--title">No alert</h2>
      </section>
    )
  }

  return (
    <section className="alert">

        <h2 className="alert--title">Alert</h2>

        <div className="alert--container">

          <div className="alert--box">

            {windData >= 30 ? (
              <span className="alert--span">Alert Wind ! {windData} km/h</span>
            ) : (
              null
            )}

          </div>

          <div className="alert--box">

            {tempData >= 27 || tempData <= 2 ? (
              <span className="alert--span">Alert Temperature ! {tempData} °C</span>
            ) : (
              null
            )}

          </div>

        </div>

    </section>
  )
}
