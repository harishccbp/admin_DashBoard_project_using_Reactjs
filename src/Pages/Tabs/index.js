import { Tabs } from 'antd';
import React from 'react';
import AutoCompleteComponent from '../../Components/Commons/AutoComplete';
import TourComponent from '../../Components/Commons/Tour';
import TransferComponent from '../../Components/Commons/Transfer';
const TabComponent = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Transfer',
        key: '1',
        children: <TransferComponent />,
      },
      {
        label: 'Tour',
        key: '2',
        children: <TourComponent />,
      },
      {
        label: 'Auto Complete',
        key: '3',
        children: <AutoCompleteComponent />,
      },
    ]}
  />
);
export default TabComponent;
