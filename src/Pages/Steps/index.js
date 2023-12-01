import { Button, message, Progress, Steps, theme } from 'antd';
import React, { useState } from 'react';
import CarouselComponent from '../../Components/Commons/Carousel';
const steps = [
  {
    title: 'First',
    content: <Progress type="circle" percent={33} size={80} />,
  },
  {
    title: 'Second',
    content: <Progress type="circle" percent={66} size={80} />,
  },
  {
    title: 'Last',
    content: <Progress type="circle" percent={100} size={80} />,
  },
];
const StepsComponent = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <div style={{ paddingBottom: 40 }}>
        <CarouselComponent /></div>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default StepsComponent;
