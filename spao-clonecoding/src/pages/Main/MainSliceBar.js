import React, {memo} from 'react';
import styled from 'styled-components';

import ImageSlider from 'react-simple-image-slider';

import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';
import slide5 from '../../assets/img/slide5.jpg';

const MainSliceBarContainer = styled.div`
    background-color: #00f3;
    width:100%;
    height:calc(100vh - 50px);
    margin-top:-90px;
`;

const MainSliceBar = memo(() => {
  const images = [
    {url: slide1},
    {url: slide2},
    {url: slide3},
    {url: slide4},
    {url: slide5}
  ];

  return (
    <MainSliceBarContainer>
      <ImageSlider
        width="100%"
        height={'calc(100vh - 50px)'}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={10}
        loop={true}
        style={{margin: 'auto'}}
      />
    </MainSliceBarContainer>
  );
});

export default MainSliceBar;
