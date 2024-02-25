import React, {memo} from 'react';
import styled from 'styled-components';

const MainBannerContainer = styled.div`
    background-image: url('./img/backgroundBg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:100vh;
    background-color: #000;
    z-index: -10;

    .mainWrap{
      max-width: 1600px;
      height: 100%;
      margin: 0 auto;
      /* background-color: #ff0; */
      position: relative;
      display: flex;
      align-items: center;

      .titleWrap{
        max-width: 1200px;
        /* height:300px; */
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        flex-wrap: wrap;

        h1{
          width:max-content;
          font-size:110px;
          font-weight: 900;
          color:#fff;
          text-shadow: 1px 1px 10px #fff6;
          text-align: center;

        }

        p{
          text-align: center;
          width:800px;
          font-size:28px;
          font-weight: 600;
          margin-top:20px;
          color: #fff;
        }
      }

      .moonObj{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background-image: url('./img/backgroundMoon.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        /* z-index: 1; */
        animation: rotation 500s infinite;

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          } 100% {
            transform: rotate(360deg);
          }
        }
      }
    }
`;

const MainBanner = memo(() => {
  return (
    <MainBannerContainer>
      <div className='mainWrap'>
        <div className='moonObj'>
        </div>
        <div className='titleWrap'>
          <h1>PORTPOLIO</h1>
          <p>다재다능한 프론트엔드 개발자 김한솔입니다.</p>
        </div>

        <div className='snsWrap'>
          <a href='#'><img src='' /></a>
          <a href='#'><img src='' /></a>
        </div>
      </div>
    </MainBannerContainer>
  );
});

export default MainBanner;
