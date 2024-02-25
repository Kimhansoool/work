import React, {memo} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

const FooterContainer = styled.div`
    background-color: #f7f7f7;
    height:480px;
    padding:60px 80px;

    .footerInner{
      /* background-color: #00f5; */
      width:100%;
      height:380px;
      display: flex;
      position: relative;
      justify-content: space-between;

      .footerInfo{
        width:50%;
        height: 250px;

        h1{
          font-size:22px;
          font-weight: 900;
        }

        p{
          margin-top:8px;
          font-size:14px;
          color:#909090;

          &:first-of-type{
            color:#1a1a1a;
          }
        }

        span{
          font-size:14px;
          color:#909090;
        }

        .subInfo{
          margin-top:50px;
          display: flex;
          flex-wrap: wrap;

          li{
            font-size:14px;
            margin-bottom:10px;
            color:#909090;
          }
        }

        .footerLogo{
          margin-top:50px; 
          display: flex;
          height:50px;
          align-items: center;
          box-sizing: border-box;

          .emblem{
          display: flex;
          align-items: center;

            img{
              width:38px;
              height:38px;
              margin-right:12px;
            }

            &::after{
              content: "";
              border-right:1px solid #cccccc;
              width:1px;
              height:26px;
              margin-left:8px;
            }
          }

          .snsLogo{
            display: flex;
            margin-left:20px;

            img{
              margin-right:12px;
            }
          }
        }
      }

      .footerMenu{
        /* background-color: #f60; */
        width:50%;

        

        ul{
          /* background-color: #0f0; */
          display: flex;
          flex-wrap: wrap;
          text-align: right;
          justify-content: right;
          height:140px;
          width:100%;

          div{
            margin-left:50px;

            li{
            font-size:14px;
            width:160px;
            /* background-color: #909090; */
            margin-bottom:20px;
            } 
          }
        }
      }

      .copyRight{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        position: absolute;
        left:0;
        bottom:0;
        border-top:1px solid #cccccc;
        padding-top:30px;

        span{
          color:#909090;
          font-size:14px;
        }

        ul{
          display: flex;
          justify-content: center;
          align-items:center;

          li{
            margin-right:12px;

            &:last-child{
              margin-right:0;
            }

            a{
              display: flex;
              align-items: center;
              font-size:14px;
              color:#1a1a1a;
            }
          }
          
          img{
            width:24px;
            height:auto;
            margin-right:10px;

            &.arrow{
              width:10px;
              height:10px;
              margin-right:0;
              margin-left:8px;
            }
          }
        }
      }
    }
`;

const Footer = memo(() => {
  const { footerInfo, subInfo, footerMenu } = dataset.footer;
  // console.log(footerInfo);

  return (
    <FooterContainer>
      <div className='footerInner'>
        <div className='footerInfo'>
          <h1>1670-9600</h1>
          {footerInfo.map(({text}, i) =>{
            return(
              <p key={i}>{text}</p>
            );
          })}
          <ul className='subInfo'>
            {subInfo.item.map((v, i) =>{
              return(
                <li key={i}>{v.text}</li>
              );
            })}
          </ul>
          <span>{subInfo.msg}</span>
          <div className='footerLogo'>
            <ul className='emblem'>
              <li><a href='#'><img src='img/emblem01.png' /></a></li>
              <li><a href='#'><img src='img/emblem02.png' /></a></li>
              <li><a href='#'><img src='img/emblem03.png' /></a></li>
            </ul>
            <ul className='snsLogo'>
              <li><a href='#'><img src='img/sns/bt_sns_face.png' /></a></li>
              <li><a href='#'><img src='img/sns/bt_sns_insta.png' /></a></li>
              <li><a href='#'><img src='img/sns/bt_sns_you.png' /></a></li>
              <li><a href='#'><img src='img/sns/bt_sns_blog.png' /></a></li>
              <li><a href='#'><img src='img/sns/bt_sns_post.png' /></a></li>
            </ul>
          </div>
        </div>
        <div className='footerMenu'>
          <ul>
            <div>
              <li><a href='#'>브랜드소개</a></li>
              <li><a href='#'>개인정보 처리방침</a></li>
              <li><a href='#'>공지사항</a></li> <br/>
            </div>
            <div>
              <li><a href='#'>오프라인 매장안내</a></li>
              <li><a href='#'>약관안내</a></li>
              <li><a href='#'>회원헤택</a></li><br />
            </div>
            <div>
              <li><a href='#'>윤리경영</a></li>
              <li><a href='#'>채정정보 및 인사제도</a></li>
              <li><a href='#'>자주묻는질문 FAQ</a></li>
            </div>
          </ul>
        </div>
        <div className='copyRight'>
          <span>Copyright ⓒ 스파오닷컴 All Right Reserved.</span>
          <ul>
            <li><a href='#'><img src='img/icon/bt_icon_lgec.png' />구매안전(에스크로)서비스</a></li>
            <li><a href='#'><img src='img/icon/bt_icon_app01.png' /></a></li>
            <li><a href='#'><img src='img/icon/bt_icon_app02.png' />스파오 APP 다운로드</a></li>
            <li><a href='#'><img src='img/icon/bt_icon_global.png' />대한민국 | 한국어 <img src='img/icon/bt_icon_global_arrow.png' className='arrow' /></a></li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
});

export default Footer;
