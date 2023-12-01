import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364',
};
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} >
      <div>
        <h3 style={contentStyle}>1st slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2nd slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3rd slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4th slide</h3>
      </div>
    </Carousel>
  );
};
export default CarouselComponent;
