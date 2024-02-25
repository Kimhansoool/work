import React, {memo} from 'react';
import styled from 'styled-components';
import MainSliceBar from './MainSliceBar';
import Content from './Content';

const IndexContainer = styled.div`

`;

const index = memo(() => {
  return (
    <IndexContainer>
      <MainSliceBar />
      <Content />
    </IndexContainer>
  );
});

export default index;
