import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    indexAxis: 'y',
    scales:{
        y:{
            display: true,
            align: 'center',
        },
        x:{
          display: false,
        }
       },
    elements: {
        bar: {
        borderWidth: 2,
        },
    },
    label: false,
    responsive: true,
    plugins: {
        legend: {
          display: false,
        },
        // title: {
        //   display: true,
        //   text: 'Chart.js Horizontal Bar Chart',
        // },
    },
};

const labels = ['Iron', 'Steel', 'Aluminium', 'Copper', 'Brass'];

export const data = {
  labels,
  datasets: [
    {
    //   label: 'Dataset 1',
      data: [-100,-50, -60,-70,-80,],
      borderColor: 'rgb(215 236 251)',
      backgroundColor: 'rgb(215 236 251)',
    },
  ],
};

export function HorizontalBarChart() {
  return <Bar options={options} data={data} />;
}
