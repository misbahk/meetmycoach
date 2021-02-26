import React from "react";

import { Line } from "react-chartjs-2";

const data = {

  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sept", "Nov"],
  datasets: [
    {
        
      lineTension: 0.1,
   
      label: "",
      data: [33, 53, 85, 71, 54, 65, 50, 42, 60, 70],
      fill: true,
      backgroundColor: "#2DABFF66",
      bordr: "1px solid #2DABFF"
    },
  
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
    
  title: {
    display: true,
    text: "SESSION TREND"
  },
  scales: {
    gridLines: {
      display:false
  },
  xAxes: [
    {
      gridLines: {
        display:false
    } ,
 
    }
  ],
    yAxes: [
      {
        gridLines: {
          display:false
      } ,
      ticks: {
        display: false //this will remove only the label
    }
      }
    ]
  }
};

export default function Chart() {
  return (
    <div style={{ position: "relative", margin: "auto", width: "24rem", height:"10rem", backgroundColor:"#F8FBFF" }}>

      <Line      data={data} legend={legend} options={options} />
    </div>
  );
}
