import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import moment from 'moment';

import { Line } from 'react-chartjs-2';

export default function SingleGraph({uuid}) {

    const [data, setData] = useState([]);
    const [currentTime, setCurrentTime] = useState('1y')


  
    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/history?uuid=${uuid}&time=${currentTime}`)
        .then(res => res.json())
        .then(data => {
            setData(data.results.data.history);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    const loadLabels = (history) => {
        // if (history.length > 60) {
        //     return history.filter((h,i) => i % 3 === 0 || i === history.length - 1);    
        // }
        return history;
    }


    const graphData = {
        labels: data.map(single => moment.unix(single.timestamp).format('MM/DD/YYYY')),
        datasets: [
          {
            label: 'Change in Price',
            data: data.map(single => single.price),
            fill: true,
            backgroundColor: 'rgba(178, 214, 255,0.5)',
            borderColor: '#16579F ',
          },
        ],
      };

      const options = {
       
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes:[{
            type: 'time',
          
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        label: {
            fontSize:50
        }
      };



    return (
        <div className="graph-single">

        <Line height={450} data={graphData} options={options} />
            
        </div>
    );
}