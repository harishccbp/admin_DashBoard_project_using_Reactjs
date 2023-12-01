import { Column } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const BarChart = () => {
  const data = [
    {
      action: 'TCS',
      pv: 50000,
    },
    {
      action: 'INFOSYS',
      pv: 35000,
    },
    {
      action: 'YASH TECHNOLOGIES',
      pv: 25000,
    },
    {
      action: 'TECH MAHINDRA',
      pv: 15000,
    },
    {
      action: 'WIPRO',
      pv: 8500,
    },
  ];
  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} style={{ height: '40vh' }} />;
};

export default BarChart;
