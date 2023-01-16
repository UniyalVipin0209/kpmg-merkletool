import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';



export const LineCharts =({dataSet, dataset2})=>{
    
    const lineChartRef= useRef();


    const parseDate = d3.timeParse('%Y-%m-%d');
   
    useEffect(()=>{
        let CountsByDate = [];
        let CountsByDate2 = [];

        //Parsing Date to 10 numbers
        dataSet.map(item=>{
            let timestamp=item.xAxis.slice(0,10);
            const parsedDataSet = {yAxis:item.yAxis, xAxis:parseDate(timestamp)}
            CountsByDate.push(parsedDataSet);
        })
        dataset2.map(item=>{
            let timestamp=item.xAxis.slice(0,10);
            const parsedDataSet = {yAxis:item.yAxis, xAxis:parseDate(timestamp)}
            CountsByDate2.push(parsedDataSet);
        })
        console.log("running...",CountsByDate);

        const margin={top:30, bottom:30, left:60, right:50};
        const width=parseInt(d3.select('#linechartArea').style('width'))- margin.left
        const height = parseInt(d3.select('#linechartArea').style('height'))- margin.top;
  
        const svg = d3.select(lineChartRef.current)
                        .attr('width','100%')
                        .attr('height','200px')
                        // .style('background-color','yellow')
                        .append('g')
                            .attr('transform','translate('+margin.left+','+margin.top+')')
                            // .style('background-color','yellow')

        // x-scale                    
        const x = d3.scaleTime()
                .domain(d3.extent(CountsByDate, function(d){return d.xAxis}))
                .range([0,width])
        svg.append('g')
            .attr('transform','translate(0,'+height+')')
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
            return "rotate(-90)";
        });
        
        const max = d3.max(CountsByDate, (d)=>d.yAxis)
        const max2 = d3.max(CountsByDate2, (d)=>d.yAxis)

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
            .datum(CountsByDate)
            .attr('fill','none')
            .attr('stroke','#2884DE')
            .attr('stroke-width',2)
            .attr('d',d3.line()
                        .x(d=>x(d.xAxis))
                        .y(y(0)))
            .transition()
                .duration(1000)
                .attr('d', d3.line()
                        .x((d) => x(d.xAxis))
                        .y((d) => y(d.yAxis)));
    svg.append('path')
            .datum(CountsByDate2)
            .attr('fill','none')
            .attr('stroke','#F89250')
            .attr('stroke-width',2)
            .attr('d',d3.line()
                        .x(d=>x(d.xAxis))
                        .y(y(0)))
            .transition()
                .duration(1000)
                .attr('d', d3.line()
                        .x((d) => x(d.xAxis))
                        .y((d) => y(d.yAxis)));

    // svg.append('text')
    //     .attr('x', x(8))
    //     .attr('y', y(1.9))
    //     .attr('alignment-baseline', 'central')
    //     .style('font-family', 'sans-serif')
    //     .style('font-size', '16px')
    //     .text('Sample 1');

    svg.selectAll('circle_samp_1')
        .data(CountsByDate)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.xAxis))
        .attr('cy', (d) => y(d.yAxis))
        .attr('r', 4)
        .attr('fill', '#2884DE')
        .attr('class', 'points')
        .style('pointer-events', 'all')
        .append('title')
        .text(function (d) {
            return (
            'Date: ' + d.xAxis + '\n' + 'Amount: ' + d.yAxis
            );
        });
    svg.selectAll('circle_samp_1')
        .data(CountsByDate2)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.xAxis))
        .attr('cy', (d) => y(d.yAxis))
        .attr('r', 4)
        .attr('fill', '#F89250')
        .attr('class', 'points')
        .style('pointer-events', 'all')
        .append('title')
        .text(function (d) {
            return (
            'Date: ' + d.xAxis +'\n' + 'Amount: ' + d.yAxis
            );
        });
    })

    return <div className='lineChartCss pt-1'>
            <div style={{width:'100%',textAlign:'center',fontWeight:'1000',fontSize:'1rem'}}>
                <span>Turnover vs Purchases</span>
            </div>
            <div id="linechartArea" style={{width:'430px'}}>
                <svg ref={lineChartRef}></svg>
            </div>
            <div style={{width:'100%',paddingBottom:'0.5rem',height:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'0.7rem'}}>
                <div style={{width:'25px',height:'2px',backgroundColor:'#2884DE'}}></div>&nbsp;&nbsp;<div>Net Turnover</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{width:'25px',height:'2px',backgroundColor:'#F89250'}}></div>&nbsp;&nbsp;<div>Net Purchase</div>
            </div>
    </div>
}