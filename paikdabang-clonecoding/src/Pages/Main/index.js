import React, {memo} from 'react';
import styled from 'styled-components';

import MainBannerSlide from './MainBannerSlide';
import PalksStory from './PalksStory';
import Menu from './Menu';
import BottomContent from './BottomContent';
import Sns from './Sns';

const IndexContainer = styled.div`
`;

const index = memo(() => {
  return (
    <IndexContainer>
      <MainBannerSlide />
      <PalksStory />
      <Menu />
      <BottomContent />
      <Sns />
    </IndexContainer>
  );
});

export default index;
