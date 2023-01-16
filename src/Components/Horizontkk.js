import React from 'react';
import Chart from 'react-apexcharts';

export class HorizontalBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [2341.50, 1341.50, 345.50, 141.50, 100.00]
            }],
            options: {
                chart: {
                    type: 'bar',
                    // height: 350
                    // offsetX: 90,
                    width:'100%',
                    toolbar: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                    // dataLabels: {
                    //     enabled: true,
                    //     enabledOnSeries: undefined,
                    //     formatter: function (val, opts) {
                    //         return val
                    //     },
                    //     textAnchor: 'middle',
                    //     distributed: false,
                    //     offsetX: 0,
                    //     offsetY: 0,
                    // }
                },
                // annotations: {
                //     xaxis: [{
                //         x: 500,
                //         borderColor: '#00E396',
                //         label: {
                //             borderColor: '#00E396',
                //             style: {
                //                 color: '#fff',
                //                 background: '#00E396',
                //             },
                //             text: 'X annotation',
                //         }
                //     }],
                //     yaxis: [{
                //         y: 'July',
                //         y2: 'September',
                //         label: {
                //             text: 'Y annotation'
                //         }
                //     }]
                // },
                responsive: [{
                    breakpoint: undefined,
                    options: {},
                }],
                legend: {
                    show: false,
                },
                fill: {
                    colors: ['#d7ecfb']
                  },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true,
                    // textAnchor: 'end',
                    formatter: function(val, opt) {
                        return "₹" + val
                    },
                    // offsetX: 70,
                    style: {
                        colors: ['#616568',],
                    }
                  },
                xaxis: {
                    categories: ['Iron', 'Steel', 'Aluminium', 'Copper', 'Brass'],
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                // xaxis: {
                //     labels: {
                //         tooltip: {
                //             enabled: false,
                //         }
                //     }
                // },
                yaxis: {
                    reversed: true,
                    axisTicks: {
                        show: true
                    },
                    // position: 'left',
                    labels: {
                        align: 'left',
                        offsetX: 0,
                        maxWidth: 160,
                    }
                },

            },


        };
    }



    render() {
        return (


            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" />
            </div>
        )
    }
}

