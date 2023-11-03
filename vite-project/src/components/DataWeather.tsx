import { useEffect, useState } from "react";
import Weather from './Weather';

/*type LongLat = {
  latitude: number;
  longitude: number;
}

type LittleLatLongProps = {
  coords: LongLat;
}

type LongLatProps = {
  position: LittleLatLongProps;
}*/

type DataProps = {
  weather: {description: string}[];
  name: string;
  main: any;
  sys: {
    sunrise: string;
    sunset: string;
  }
}

export default function DataWeather() {
  
  //const [lat, setLat] = useState<LongLatProps| number>(0);
  //const [long, setLong] = useState<LongLatProps | number>(0);
  const [data, setData] = useState<DataProps>();
  
  console.log(data, "data")

  const api_url = process.env.REACT_APP_API_URL as string;
  const api_key = process.env.REACT_APP_API_KEY as string;

  useEffect(() => {
    const fetchData = () => {
      // navigator.geolocation.getCurrentPosition(function(position) {
        
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
        
      // });
      fetch(`${api_url}/weather/?q=Lausanne&appid=${api_key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log(result);
      })
    }
    fetchData();
  }, [])

  return (
    <section className='dataweather'>

      {(typeof data?.main != 'undefined') ? (
        <Weather weatherData={data} />
      ): (
        <div></div>
      )}

    </section>
  );
}
