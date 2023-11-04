import { useEffect, useState } from "react";
import Weather from './Weather';

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

export default function DataWeather() {

  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState<boolean>(true)

  console.log(data, "data")



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
    <section className='dataweather--section'>

      {(typeof data?.location != 'undefined') ? (
        <Weather weatherData={data} />
      ): (
        <div>No response from API</div>
      )}

    </section>
  );
}
