type LittleDataProps = {
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

type WeatherProps = {
  weatherData: LittleDataProps;
}

export default function AlertSection({weatherData}: WeatherProps) {

  const windData = weatherData.current.wind_kph;
  const tempData = weatherData.current.temp_c;

  if ((windData < 35) && (tempData < 27 && tempData > 2) ) {
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

            {windData >= 35 ? (
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
