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
  import './styles/LineChart.css'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {color: "yellow"},
      },
      title: {
        display: true,
        text: 'Températures & Pluviométrie',
        color: "yellow"
      },
    },
  };
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4,5,6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [3,4,7,8,10,11],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

function LineChart() {
  return (
    <section className="lineChart">
        <div className="lineChart--div">
            <Line options={options} data={data} />
        </div>
    </section>
  )
}

export default LineChart