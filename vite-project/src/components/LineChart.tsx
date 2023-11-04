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
        position: 'top' as const,
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
        }
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
        label: 'Temperatures(C°)',
        data: [10,7,10,4,14,6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        pointBorderColor: 'salmon',
        pointBackgroundColor: 'salmon',
        borderWidth: 2,
      },
      {
        label: 'Wind',
        data: [9, 7, 11, 16, 10, 11],
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

      <div className="lineChart--div">

          <Line options={options} data={data} />
      
      </div>

      <span className='lineChart--span'>
        <a href='/output.txt' download>
          Download
        </a>
      </span>

    </section>
  )
}

export default LineChart
