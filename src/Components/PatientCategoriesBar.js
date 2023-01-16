import React, { useEffect, useState } from "react";
import {ComposedChart,Bar,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,ResponsiveContainer,} from "recharts";
const data = [
{
	name: "JAN",
	l1: 45,
	l2: 60,
},
{
	name: "FEB",
	l1: 30,
	l2: 90,
},
{
	name: "MAR",
	l1: 25,
	l2: 70,
},
{
	name: "APR",
	l1: 40,
	l2: 50,
},
];

export default function App(props) {
	console.log(props)

const [barData, setData] = useState([])

useEffect(()=>{
	if(props.apiData!=null && props.apiData.length!=0){
		setData(props.apiData)
	}
},[props.apiData])

return (
	<div style={{height:'270px',width:'100%'}}>
	<ResponsiveContainer width="100%"
						height="100%">
		<ComposedChart
		width={'100%'}
		height={300}
		data={barData}
		margin={{
			top: 5,
			right: 30,
			left: 0,
			bottom: 5,
		}}
		>
			{/* <CartesianGrid strokeDasharray="3 3" /> */}
			<XAxis dataKey="name" style={{color:'lightgray',fontSize:'12px'}} stroke={'#57525A65'}  tick={{fill:'#57525A65'}}  tickLine={{stroke:'#57525A65'}}/>
			<YAxis style={{color:'lightgray',fontSize:'12px'}}  stroke={'#57525A65'}  tick={{fill:'#57525A65'}} tickLine={{stroke:'#57525A65'}}/>
			{/* <Legend /> */}
			<Line type="monotone" dataKey="kidney"  stroke="#f080df"  strokeDasharray="5 5"/>
			<Line type="monotone" dataKey="kccq" stroke="#97d8c6" strokeDasharray="5 5" />
			<Bar dataKey="kidney" barSize={10} fill="#f080df"/>
			<Bar dataKey="kccq" barSize={10} fill="#97d8c6" />
		</ComposedChart>
	</ResponsiveContainer>
	</div>
);
}
