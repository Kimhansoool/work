import React, {memo} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width:100%;
  height:200px;
  border-top:1px solid #d9d9d9;
  color:#333333;

  .footerContentWrap{
    height: 100%;
    margin:0 auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoWrap{
      margin-right:80px;

      .logo{
        width:150px;
        height: 60px;
      }
    }

    .infoWrap{
      .infoContent{
        .infoItem{
          display: flex;
          margin-bottom:14px;

          li{
            &::after{
              content:"|";
              margin:0 5px;
            }

            &:last-child{
              &::after{
                color:#fff;
              }
            }
          }
        }

        .copy{
          color:#959595;
          line-height: 1.3;
        }
      }
    }

    .sns{
      display: flex;
      align-items: center;
      
      .snsLogo{
        width:30px;
        height: auto;
        margin-right:10px;
      }
    }
  }
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <div className='footerContentWrap'>
        <div className='logoWrap'>
          <img src='/img/footerlogo.png' alt='logo' className='logo' />
        </div>
        <div className='infoWrap'>
          <div className='infoContent'>
            <ul className='infoItem'>
              <li><a href='#'>개인정보처리방침</a></li>
              <li><a href='#'>이용약관</a></li>
              <li><a href='#'>찾아오시는 길</a></li>
            </ul>
            <p className='copy'>
              경기도 안양시 동안구 평촌대로 000 번길  99 평촌빌딩 | 대표전화 031 - 123 - 4567 (평일 08:30 - 18:00, 야간/공휴일 등 휴무)<br />
              Copyright. Kimhs All rights reserved.
            </p>
          </div>
        </div>
        <div className='sns'>
          <img src='/img/facebook.png' alt='facebookLogo' className='snsLogo' />
          <img src='/img/instagram.png' alt='instagramLogo' className='snsLogo' />
        </div>
      </div>
    </FooterContainer>
  );
});

export default Footer;
