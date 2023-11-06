export type DataProps = {
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