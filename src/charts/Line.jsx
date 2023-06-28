import React from "react";
import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react";

const Test = ({ xData, yData, title }) => {
  const option = {
    title: { 
        text: title,
        left: "center",
        top: 20,
        textStyle: {
            fontSize: "2rem",
            color: "#3d3d3d",
        },
     },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    legend: {
        scroll: true,
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "2%",
        containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xData || [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line" ,
        data: yData || [],
        stack: "total",
        smooth: true,
        lineStyle: {
            width: title === 'impressions' ? 0 : 2,
          },
          showSymbol: false,
          areaStyle: {
            opacity: title === 'impressions' ? 0.8 : 0,
            color: title === 'impressions' ? "#839c66" : '#bca3f5',
          }
      },
    ],
  };
  return (
    <div className="chart">
      <ReactECharts option={option} />
    </div>
  );
};

export default Test;
