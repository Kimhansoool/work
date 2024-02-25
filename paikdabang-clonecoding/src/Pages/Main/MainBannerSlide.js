import React, {memo} from 'react';
import styled from 'styled-components';
import ImageSlider from 'react-simple-image-slider';

import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';
import slide5 from '../../assets/img/slide5.jpg';

const MainBannerSlideContainer = styled.div``;

const MainBannerSlide = memo(() => {
  const images = [
    {url: slide1},
    {url: slide2},
    {url: slide3},
    {url: slide4},
    {url: slide5}
  ];

  return (
    <MainBannerSlideContainer>
      <ImageSlider
        width="100%"
        height={620}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5.0}
        loop={true}
        style={{margin: 'auto'}}
      />
    </MainBannerSlideContainer>
  );
});

export default MainBannerSlide;
