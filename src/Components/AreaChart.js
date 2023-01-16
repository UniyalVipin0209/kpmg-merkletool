import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const data= [
  {year: '2017', count: 52},
  {year: '2018', count: 60},
  {year: '2019', count: 120},
  {year: '2020', count: 97},
  {year: '2021', count: 115}
]

export const ChartContainer = ({dataSet, dataset2}) => {
  const areaChartRef = useRef();
 
  const parseDate = d3.timeParse('%Y-%m-%d');
   
  useEffect(()=>{
      let AreaDataByDate = [];
      let AreaDataByDate2 = [];

      //Parsing Date to 10 numbers
      dataSet.map(item=>{
          let timestamp=item.xAxis.slice(0,10);
          const parsedDataSet = {yAxis:item.yAxis, xAxis:parseDate(timestamp)}
          AreaDataByDate.push(parsedDataSet);
      })
      dataset2.map(item=>{
          let timestamp=item.xAxis.slice(0,10);
          const parsedDataSet = {yAxis:item.yAxis, xAxis:parseDate(timestamp)}
          AreaDataByDate2.push(parsedDataSet);
      })
      console.log("running 2...",AreaDataByDate);
      
      const margin={top:30, bottom:30, left:60, right:50};
      const width=parseInt(d3.select('#areachartArea').style('width'))- margin.left
      const height = parseInt(d3.select('#areachartArea').style('height'))- margin.top;

      
      const svg = d3.select(areaChartRef.current)
      .attr('width','100%')
      .attr('height','200px')
      // .style('background-color','yellow')
      .append('g')
          .attr('transform','translate('+margin.left+','+margin.top+')')

        
        // x-scale                    
        const x = d3.scaleTime()
                .domain(d3.extent(AreaDataByDate, function(d){return d.xAxis}))
                .range([0,width])
        svg.append('g')
            .attr('transform','translate(0,'+120+')')
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
            return "rotate(-90)";
        });
        
        const max = d3.max(AreaDataByDate, (d)=>d.yAxis)
        const max2 = d3.max(AreaDataByDate2, (d)=>d.yAxis)

         // y-scale 
        const y = d3.scaleLinear()
                    .domain([0, max>max2?max:max2])
                    .range([height,0])
        svg.append('g')
                    .call(d3.axisLeft(y))
        svg.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
            .scale(y)
            // .ticks(6)
            .tickSize(-width, 0, 0)
            .tickFormat(''))
        svg.append('path')
            .datum(AreaDataByDate)
            .attr('fill','#F89250')
            .attr('stroke','#F89250')
            .attr('stroke-width',2)
            .attr('d',d3.area()
                        .x(d=>x(d.xAxis))
                        .y0(y(0))
                        .y1((d) => y(d.yAxis)));
            // .transition()
            //     .duration(1000)
            //     .attr('d', d3.area()
            //             .x((d) => x(d.xAxis))
            //             .y((d) => y(d.yAxis)));
      
        svg.append('path')
                .datum(AreaDataByDate2)
                .attr('fill','#2884DE')
                .attr('stroke','#2884DE')
                .attr('stroke-width',2)
                .attr('d',d3.area()
                            .x(d=>x(d.xAxis))
                            .y0(y(0))
                            .y1((d) => y(d.yAxis)))
                // .transition()
                //     .duration(1000)
                //     .attr('d', d3.line()
                //             .x((d) => x(d.xAxis))
                //             .y0(y(0))
                //             .y1((d) => y(d.yAxis)));

        svg.selectAll('circle_samp_1')
        .data(AreaDataByDate2)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.xAxis))
        .attr('cy', (d) => y(d.yAxis))
        .attr('r', 4)
        .attr('fill', '#2884DE')
        .attr('stroke','black')
        .attr('class', 'points')
        .style('pointer-events', 'all')
        .append('title')
        .text(function (d) {
            return (
            'Date: ' + d.xAxis + '\n' + 'Amount: ' + d.yAxis
            );
        });
    svg.selectAll('circle_samp_1')
        .data(AreaDataByDate)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.xAxis))
        .attr('cy', (d) => y(d.yAxis))
        .attr('r', 4)
        .attr('fill', '#F89250')
        .attr('stroke','black')
        .attr('class', 'points')
        .style('pointer-events', 'all')
        .append('title')
        .text(function (d) {
            return (
            'Date: ' + d.xAxis +'\n' + 'Amount: ' + d.yAxis
            );
        });
    })

  return (
      <div className='lineChartCss pt-1'>
          <div style={{width:'100%',textAlign:'center',fontWeight:'1000',fontSize:'1rem'}}>
              <span>Business Summary</span>
          </div>
          <div id="areachartArea" style={{width:'430px', margin:0}}>
              <svg ref={areaChartRef}></svg>
          </div>
          <div style={{width:'100%',paddingBottom:'0.5rem',height:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'0.7rem'}}>
                <div style={{width:'10px',height:'10px',backgroundColor:'#2884DE'}}></div>&nbsp;&nbsp;<div>Total Sales</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{width:'10px',height:'10px',backgroundColor:'#F89250'}}></div>&nbsp;&nbsp;<div>Third Party Sales</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{width:'10px',height:'10px',backgroundColor:'#C6C6C6'}}></div>&nbsp;&nbsp;<div>Related Party Sales</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{width:'10px',height:'10px',backgroundColor:'#EDF046'}}></div>&nbsp;&nbsp;<div>Intra Org Sales</div>
            </div>
      </div>
  );
};

// const parseDate = d3.timeParse('%Y-%m-%d');
  
// // set the margins and dimensions of the graph
// var margin ={top:10, right:30, bottom:30,left:60},
//     width=460 - margin.left - margin.right,
//     height= 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page

// useEffect(()=>{
//     fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
//     .then(response=>response.json())
//     .then(data => {
//       //Transform data
//       console.log(data);

//       const permits = data.filter(event=>{
//         return event.eventtype==='Shooting Permit'
//       })

//       console.log(permits)
//       //Get all the unique dates
//       const dates = [...new Set(permits.map(each=>each.enteredon.slice(0,10)))]

//       let CountsByDate = []

//       // loop it to count all the entries on the same date
//       dates.map(item=>{
//         let date = item
//         let count = 0
//         permits.map(each=>{
//           let timestamp = each.enteredon.slice(0,10);
//           if(timestamp === date){count+=1}
//         }) 

//         const counts ={date:parseDate(date), count:count};
//         CountsByDate.push(counts)
//       })
//       console.log(CountsByDate)
//     // })        

//     const margin = {top: 50, right: 30, bottom:50, left:30};
//     const width=parseInt(d3.select('#chartArea').style('width'))- margin.left - margin.right
//     const height = parseInt(d3.select('#chartArea').style('height'))- margin.top - margin.bottom

//     //Setup chart
//     const svg = d3.select(areachart.current)
//                 .attr('width',width + margin.left + margin.right)
//                 .attr('height',height+ margin.top + margin.bottom)
//                 // .style('background-color','yellow')
//                 .append('g')
//                   .attr('transform', 'translate('+margin.left+','+margin.top+')');

//     const x = d3.scaleTime()
//                 .domain(d3.extent(CountsByDate, function(d){return d.date}))
//                 .range([0,width])
//     svg.append('g')
//         .attr('transform','translate(0,'+height+')')
//         .call(d3.axisBottom(x))

//     const max = d3.max(CountsByDate, (d)=>d.count)

//     const y = d3.scaleTime()
//                 .domain([0, max])
//                 .range([height,0])
//     svg.append('g')
//                 .call(d3.axisLeft(y))

//     svg.append('path')
//         .datum(CountsByDate)
//         .attr('fill','none')
//         .attr('stroke','#2884DE')
//         .attr('stroke-width',3)
//         .attr('d',d3.line()
//                     .x(d=>x(d.date))
//                     .y(d=>y(d.count)))

//     svg.append('text')
//         .attr('x',(width/2))
//         .attr('y', (margin.top/6 - 10))
//         .attr('text-anchor','middle')
//         .attr('font-size', '19px')
//         .attr('font-weight','bold')
//         .attr('fill','black')
//         .text('Turnover Vs Purchases')
//     })
    
// })



// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

// const data= [
//   {year: '2017', count: 52},
//   {year: '2018', count: 60},
//   {year: '2019', count: 120},
//   {year: '2020', count: 97},
//   {year: '2021', count: 115}
// ]

// export const ChartContainer = () => {
//   const areachart = useRef();

//   const parseDate = d3.timeParse('%Y-%m-%d');
  
//   // set the margins and dimensions of the graph
//   var margin ={top:10, right:30, bottom:30,left:60},
//       width=460 - margin.left - margin.right,
//       height= 400 - margin.top - margin.bottom;

//   // append the svg object to the body of the page

//   useEffect(()=>{
//       fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
//       .then(response=>response.json())
//       .then(data => {
//         //Transform data
//         console.log(data);

//         const permits = data.filter(event=>{
//           return event.eventtype==='Shooting Permit'
//         })

//         console.log(permits)
//         //Get all the unique dates
//         const dates = [...new Set(permits.map(each=>each.enteredon.slice(0,10)))]

//         let CountsByDate = []

//         // loop it to count all the entries on the same date
//         dates.map(item=>{
//           let date = item
//           let count = 0
//           permits.map(each=>{
//             let timestamp = each.enteredon.slice(0,10);
//             if(timestamp === date){count+=1}
//           }) 

//           const counts ={date:parseDate(date), count:count};
//           CountsByDate.push(counts)
//         })
//         console.log(CountsByDate)
//         const margin = {top: 50, right: 30, bottom:50, left:30};
//         const width=parseInt(d3.select('#chartArea').style('width')) - margin.left - margin.right
//         const height = parseInt(d3.select('#chartArea').style('height')) - margin.top - margin.bottom
  
//         //Setup chart
//         const svg = d3.select(areachart.current)
//                     .attr('width',width + margin.left +margin.right)
//                     .attr('height',height + margin.top + margin.bottom)
//                     // .style('background-color','yellow')
//                     .append('g')
//                       .attr('transform', 'translate('+margin.left+','+margin.top+')');
  
//         const x = d3.scaleTime()
//                     .domain(d3.extent(CountsByDate, function(d){return d.date}))
//                     .range([0,width])
//         svg.append('g')
//             .attr('transform','translate(0,'+height+')')
//             .call(d3.axisBottom(x))
  
//         const max = d3.max(CountsByDate, (d)=>d.count)
  
//         const y = d3.scaleTime()
//                     .domain([0, max])
//                     .range([height,0])
//         svg.append('g')
//                     .call(d3.axisLeft(y))
  
//         svg.append('path')
//             .datum(CountsByDate)
//             .attr('fill','none')
//             .attr('stroke','#2884DE')
//             .attr('stroke-width',3)
//             .attr('d',d3.line()
//                         .x(d=>x(d.date))
//                         .y(d=>y(d.count)))
//       })        

//   },
//   [])

  

//   return (
//       <div id="chartArea" style={{width:'300px', height:'300px'}}>
//           <svg ref={areachart}></svg>
//       </div>
//   );
// };
