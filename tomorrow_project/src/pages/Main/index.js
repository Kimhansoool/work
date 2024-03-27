import React, {memo} from 'react';
import styled from 'styled-components';

import MainBannerSlide from './MainBannerSlide';
import Information from './Information';
import BannerContent from './BannerContent';

const IndexContainer = styled.div`
`;

const index = memo(() => {
  return (
    <IndexContainer>
        <MainBannerSlide />
        <Information />
        <BannerContent />
    </IndexContainer>
  );
});

export default index;
