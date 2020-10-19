import React from 'react';
import {Polar} from 'react-chartjs-2';

export const PolarChart = (props) => {
    const randomRgb = () => 
        0 + Math.floor(Math.random() * (255 - 0 + 1));

    const labels = props.data.map(label => label.name);
    const chartValues = props.data.map(val => val.lead_nr);
    const bgcolor = props.data.map(val => `rgba(${randomRgb()}, ${randomRgb()}, ${randomRgb()}, 0.3)`);

    const chartData = {
        labels: labels,
        datasets: [{
            backgroundColor: bgcolor,
            borderColor: 'rgba(0, 0, 0, 0.4)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 174, 239, 0.4)',
            hoverBorderColor: '#00aeef',
            data: chartValues
        }]
    };
    
    const options = {
        legend: { display: false }
    }

    return <Polar data={chartData} options={options} />
}
