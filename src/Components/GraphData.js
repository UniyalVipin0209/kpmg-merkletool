import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function App(props) {
return (
	<div className="App">
	<div style={{ maxWidth: "650px" }}>
		<Bar barSize={10}
		data={{
			// Name of the variables on x-axies for each bar
			labels: props.name,
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: props.value,
				// Color of each bar
				backgroundColor: ["#C43E3E", "#C43E3E", "#DEB836", "#A7CC54"],
				// Border color of each bar
				borderColor: ["#C43E3E", "#C43E3E", "#DEB836", "#A7CC54"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={300}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default App;
