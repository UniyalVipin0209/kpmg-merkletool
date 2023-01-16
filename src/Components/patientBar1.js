import React from "react";
import {ComposedChart,Bar,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,ResponsiveContainer,} from "recharts";


export default function App(props) {
	console.log(props)
	const data = props.kccqData
	console.log(data)
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
		<YAxis  dataKey="value" style={{color:'lightgray',fontSize:'12px'}}/>
		{/* <Legend /> */}
        <Bar label={{ position: 'top' }} dataKey="value" barSize={40} fill="#B2C97E" />
		</ComposedChart>
	</ResponsiveContainer>
	</div>
);
}
