import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph() {
  return (
    <div style={{marginTop:'10%'}}>
      <Line
        data={{
          labels: ["jan", "feb", "mar", "apr"],
          datasets: [
            {
              // y-axis data plotting values
			  label: "Lv ejection fraction",
              data: [200, 400, 378, 520],
              fill: false,
              borderWidth:4,
              backgroundColor: "#31A6B5",
              borderColor:'#31A6B5',
              responsive:true
            },
          ],
        }}
      />
    </div>
  );
}

export default LineGraph;
// import {
// 	LineChart,
// 	ResponsiveContainer,
// 	Legend, Tooltip,
// 	Line,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid
// } from 'recharts';

// // Sample chart data
// const pdata = [
// 	{
// 		name: 'jan',
// 		fees: 120
// 	},
// 	{
// 		name: 'feb',
// 		fees: 12
// 	},
// 	{
// 		name: 'mar',
// 		fees: 10
// 	},
// 	{
// 		name: 'apr',
// 		fees: 5
// 	},
// ];

// function App() {
// 	return (
// 		<div style={{width:'100%',height:'100%'}}>
// 			<ResponsiveContainer width="100%" aspect={3}>
// 				<LineChart data={pdata} margin={{ right: 30 }}>
// 					<CartesianGrid />
// 					<XAxis dataKey="name"
// 						interval={'preserveStartEnd'} />
// 					<YAxis></YAxis>
// 					<Line dataKey="fees"
// 						stroke="red" activeDot={{ r: 8 }} />
// 				</LineChart>
// 			</ResponsiveContainer>
// 		</div>
// 	);
// }

// export default App;
