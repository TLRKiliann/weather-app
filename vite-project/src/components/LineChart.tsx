import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import db_data from '../services/db_data'

  const tempVal = db_data.map((m) => m.temp)
  //console.log(tempVal, "db_data")

  const windVal = db_data.map((m) => m.wind)
  //console.log(windVal, "db_data")

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'September', 'October', 'November', 'December'];
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: "sandybrown",
          font: {
            size: 14
          }
        },
      },
      title: {
        display: true,
        text: 'Temperatures & Wind',
        color: "sandybrown",
        font: {
          size: 22
        },
        padding: {
          top: 20, 
          bottom: 20
        }
      },
    },
    layout: {
      padding: {               
        top: 0,
        right: 15,
        bottom: 10,
        left: 15
      },
    },
    scales: {
      x: {
        grid:{
          color: 'magenta',
        },
        border: {
          dash: [2,4],
        },  
        ticks: {
          display: true,
          color: "sandybrown"
        }
      },
      y: {
        grid: {
          color: 'magenta',
        },
        border: {
          dash: [2,4],
        }, 
        ticks: {
          display: true,
          color: "sandybrown",
        }
      }
    }
  };
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Temperatures (C°)',
        data: tempVal,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        pointBorderColor: 'salmon',
        pointBackgroundColor: 'salmon',
        borderWidth: 2,
      },
      {
        label: 'Wind (km/h)',
        data: windVal,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.3)',
        pointBorderColor: 'deepskyblue',
        pointBackgroundColor: 'deepskyblue',
        borderWidth: 2
      },
    ],
  };
  

function LineChart() {
  return (
    <section className="lineChart">

      <div className="lineChart--container">

        <Line options={options} data={data} />
  
      </div>

      <span className='lineChart--span'>

        <a href='/weather_data.txt' download>
          Download
        </a>

      </span>

    </section>
  )
}

export default LineChart
