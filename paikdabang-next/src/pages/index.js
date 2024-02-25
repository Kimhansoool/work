import React, {memo} from 'react';
import styled from 'styled-components';
import mq from '@/styles/MediaQuery';

import MainBannerSlide from './Main/MainBannerSlide';
import PalksStory from './Main/PalksStory';
import Menu from './Main/Menu';
import BottomContent from './Main/BottomContent';
import Sns from './Main/Sns';

const IndexContainer = styled.div`
  margin-top:120px;

  ${mq.maxWidth('xl')`
    margin-top:70px;
  `}
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
