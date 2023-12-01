import { Pie } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const DonutChart = () => {
  const data = [
    {
      type: 'JAN',
      value: 27,
    },
    {
      type: 'FEB',
      value: 25,
    },
    {
      type: 'MARCH',
      value: 18,
    },
    {
      type: 'APRIL',
      value: 15,
    },
    {
      type: 'MAY',
      value: 10,
    },
    {
      type: 'JUNE',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Monthly Prpfit',
      },
    },
  };
  return <Pie {...config} style={{ height: '40vh' }} />;
};

export default DonutChart;
