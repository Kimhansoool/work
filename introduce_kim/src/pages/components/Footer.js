import React, {memo} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #282828;
    padding:90px 0;
    margin:0 auto;
    text-align: center;

    p{
      font-size:20px;
      color:#fff;
      margin-bottom:15px;

      &:last-child{margin-bottom:0;}
    }
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <p>CopyRight 2024. Kimhansol all rights reserved.</p>
      <p>kimhs7858@gmail.com</p>
    </FooterContainer>
  );
});

export default Footer;
