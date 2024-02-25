import React, {memo} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    border-top:3px solid #ffe600;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;

    .footerInner{
      padding-top:30px;
      max-width: 1200px;
      margin:0 auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo{
        width:180px;
        margin-bottom:20px;
      }

      .footerInfo{
        margin-top:10px;
        display: flex;
        justify-content: center;

        .Infoitem{
          margin-right:8px;
          font-size:14px;

          &.Infoitem::after{
            content:"|";
            margin-left:8px;
          }

          &.Infoitem:last-of-type::after{
            content:"";
            margin-left:0;
          }
        }
      }

      .copyRight{
        margin-top:40px;
        margin-bottom:40px;
        font-weight: 200;
      }
    }
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <div className='footerInner'>
        <img src='img/flogo.png' alt='logo' className='logo' />
        <ul className='footerInfo'>
          <li className='Infoitem'>(주)더본코리아</li>
          <li className='Infoitem'>사업자등록번호 211-86-00870</li>
          <li className='Infoitem'>대표이사 백종원</li><br />
        </ul>
        <ul className='footerInfo'>
          <li className='Infoitem'>주소: 서울시 강남구 봉은사로 1길 39 유성빌딩 5~6층</li>
          <li className='Infoitem'>팩스: 02-511-3864</li><br />
        </ul>
        <ul className='footerInfo'>
          <li className='Infoitem'>본사 대표전화: 02-549-3864</li>
          <li className='Infoitem'>가맹상담전화: 02-3447-0410</li>
          <li className='Infoitem'>고객센터: 1544-2360</li>
        </ul>
        <p className='copyRight'>
          COPYRIGHTⓒ 2018 THEBORN KOREA INC. ALL RIGHTS RESERVED
        </p>
      </div>
      
    </FooterContainer>
  );
});

export default Footer;
