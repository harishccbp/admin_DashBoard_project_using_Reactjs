import { Button, Result, Tooltip } from 'antd';
import React from 'react';
const ResultComponent = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>, <Tooltip title="Thanks for using Admin Dashboard. Have a nice day!" trigger="click" defaultOpen>
        <Button>We have a Tooltip here</Button>
      </Tooltip>
    ]}
  />
);
export default ResultComponent;