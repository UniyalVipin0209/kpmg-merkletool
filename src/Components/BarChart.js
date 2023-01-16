import React from "react";
import {ComposedChart,Bar,LineChart,Tooltip,Line,XAxis,YAxis,CartesianGrid,Legend,ResponsiveContainer,} from "recharts";


export default function BarChart(props) {
	console.log(props)
	const data = props.progressdata
	console.log(data)
		
return (
	<div style={{height:'72%',width:'96%',marginTop:'22px'}}>
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
		<XAxis dataKey="name" style={{color:'lightgray',fontSize:'12px'}}  stroke={'#fff'}  tick={{fill:'#57525A65'}}  tickLine={{stroke:'#57525A65'}}/>
		<YAxis style={{color:'lightgray',fontSize:'12px'}}  stroke={'#fff'}  tick={{fill:'#57525A65'}}  tickLine={{stroke:'#57525A65'}}/>
		{/* <Legend /> */}
          <Tooltip />
    <Bar dataKey="kccq" barSize={60} fill="#97d8c6" />
		</ComposedChart>
	</ResponsiveContainer>
	</div>
);
}
