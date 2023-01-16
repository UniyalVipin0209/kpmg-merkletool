import React from "react";
import {ComposedChart,Bar,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,ResponsiveContainer,} from "recharts";
const data = [
{
	name: "mon",
	l2: 60,
},
{
	name: "tue",
	l2: 90,
},
{
	name: "wed",
	l2: 70,
},
{
	name: "thu",
	l2: 50,
},
{
	name: "fri",
	l2: 50,
},
{
	name: "sat",
	l2: 50,
},
{
	name: "sun",
	l2: 50,
},
];

export default function App() {
return (
	<div style={{height:'300px'}}>
	<ResponsiveContainer width="100%"
						height="100%">
		<ComposedChart
		width={500}
		height={300}
		data={data}
		margin={{
			top: 5,
			right: 30,
			left: 5,
			bottom: 5,
		}}
		>
		{/* <CartesianGrid strokeDasharray="3 3" /> */}
		<XAxis dataKey="name" style={{color:'lightgray',fontSize:'12px'}}/>
		<YAxis style={{color:'lightgray',fontSize:'12px'}}/>
		{/* <Legend /> */}
        <Bar dataKey="l2" barSize={10} fill="#A6D4F0" />
		</ComposedChart>
	</ResponsiveContainer>
	</div>
);
}
