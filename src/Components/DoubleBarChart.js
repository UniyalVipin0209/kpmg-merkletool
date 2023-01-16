import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';



export const DoubleBarChart =({title, title1, title2,z, dataSet, dataset2})=>{
    
    const barChartRef= useRef();
   
    useEffect(()=>{

        const margin={top:30, bottom:30, left:60, right:50};
        const width=parseInt(d3.select('#doublebarchartArea'+z).style('width'))- margin.left;
        const height = parseInt(d3.select('#doublebarchartArea'+z).style('height'))+ margin.top;
  
        const svg = d3.select(barChartRef.current)
                        .attr('width','100%')
                        .attr('height','280px')
                        // .style('background-color','yellow')
                        .append('g')
                            .attr('transform','translate('+margin.left+','+margin.top+')')
                            // .style('background-color','yellow')

        // x-scale                    
        const x = d3.scaleBand()
                .domain(d3.range(dataSet.length))
                .range([0,width])
                .padding('0.8')
        svg.append('g')
            .attr('transform','translate(0,'+height+')')
            .call(d3.axisBottom(x).tickFormat(i=>dataSet[i].xAxis).tickSizeOuter(0))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
            return "rotate(-45)";
        });
        
        const max = d3.max(dataSet, (d)=>d.yAxis)

        let max2;
        if(dataset2.length!=0)
            max2 = d3.max(dataset2, (d)=>d.yAxis)

         // y-scale 
        const y = d3.scaleLinear()
                    .domain([0, dataset2.length!=0 ? (max>max2?max:max2):max])
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

            console.log('dataset2 -- ',dataset2)
        // if(dataset2)
        if(dataset2.length!=0)
        svg.append('g')
            .attr('fill','#F89250')
            .selectAll('rect')
            .data(dataset2)
            .join('rect')
                .attr('x', (d,i)=>x(i)+'15')
                .attr('y', d=>y(d.yAxis))
                .attr('height', d=>y(0)-y(d.yAxis))
                .attr('width','20px')
                // .style('margin-left','15px')
        svg.append('g')
            .attr('fill','#2884DE')
            .selectAll('rect')
            .data(dataSet)
            .join('rect')
                .attr('x', (d,i)=>x(i))
                .attr('y', d=>y(d.yAxis))
                .attr('height', d=>y(0)-y(d.yAxis))
                .attr('width','10px')
       
        // svg.append('path')
        //     .datum(CountsByDate)
        //     .attr('fill','none')
        //     .attr('stroke','#2884DE')
        //     .attr('stroke-width',2)
        //     .attr('d',d3.line()
        //                 .x(d=>x(d.xAxis))
        //                 .y(y(0)))
        //     .transition()
        //         .duration(1000)
        //         .attr('d', d3.line()
        //                 .x((d) => x(d.xAxis))
        //                 .y((d) => y(d.yAxis)));

    // svg.append('text')
    //     .attr('x', x(8))
    //     .attr('y', y(1.9))
    //     .attr('alignment-baseline', 'central')
    //     .style('font-family', 'sans-serif')
    //     .style('font-size', '16px')
    //     .text('Sample 1');

    // svg.selectAll('circle_samp_1')
    //     .data(dataSet)
    //     .enter()
    //     .append('circle')
    //     .attr('cx', (d) => x(d.xAxis))
    //     .attr('cy', (d) => y(d.yAxis))
    //     .attr('r', 4)
    //     .attr('fill', '#2884DE')
    //     .attr('class', 'points')
    //     .style('pointer-events', 'all')
    //     .append('title')
    //     .text(function (d) {
    //         return (
    //         'Date: ' + d.xAxis + '\n' + 'Amount: ' + d.yAxis
    //         );
    //     });
    })

    return <div className='barChartCss pt-1'>
            <div style={{width:'100%',textAlign:'center',fontWeight:'1000',fontSize:'1rem'}}>
                <span>{title}</span>
            </div>
           <div style={{width:'100%',display:'flex'}}>
            <div id={"doublebarchartArea"+z} style={{width:'290px',display:'flex'}}>
                    <svg ref={barChartRef}></svg>
                    {/* <div style={{width:'30px',height:'100%',paddingBottom:'0.5rem',height:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'0.7rem'}}>
                        <div>
                            <div style={{width:'10px',height:'10px',backgroundColor:'#2884DE'}}></div>&nbsp;&nbsp;<div>Total Sales</div> 
                            <div style={{width:'10px',height:'10px',backgroundColor:'#F89250'}}></div>&nbsp;&nbsp;<div>Third Party Sales</div>
                        </div>
                    </div> */}
                </div>
                <div style={{width:'160px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'0.7rem'}}>
                        <div>
                            <div style={{display:'flex'}}>
                                <div style={{width:'10px',height:'10px',backgroundColor:'#2884DE'}}></div>&nbsp;&nbsp;<div style={{fontSize:'0.65rem'}}>{title1}</div> 
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{width:'10px',height:'10px',backgroundColor:'#F89250'}}></div >&nbsp;&nbsp;<div style={{fontSize:'0.65rem'}}>{title2}</div>
                            </div>
                        </div>
                </div>
           </div>
    </div>
}