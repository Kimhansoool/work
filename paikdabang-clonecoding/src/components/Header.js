import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

const HeaderContainer = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #ff05; */
    padding:20px 0;
    position: static;
    width:100%;
    height:120px;

    .bgHover{
      width:100%;
      background-color: #ffe600;
      position: absolute;
      z-index: 20;
      top:120px;
      left:0;
      height:0;
      transition: height 200ms ease-in-out;

      &.on{
        height:180px;
      }
    }

    .navInner{
      position: relative;
      max-width:1200px;
      /* background-color: #f60; */
      margin:0 auto;

      .topMenu{
        display: flex;
        justify-content: right;
        align-items: center;
        
        li{
          margin-left:10px;
          font-size:14px;

          &:first-child::after{
            content: "|";
            margin-left:10px;
            color:#555;
          }

          a{
            color:#555;
          }
        }
      }

      .navWrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .logoImg{
          margin-right:20px;
        }

        .navItem{
          width:100%;
          height:100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .link{
            height:100%;
            width:120px;
            padding:10px 20px;
            position: relative;
            /* padding:0 20px; */
            

            a{
              font-size:16px;
            }

            .navHoverWrap{
              /* background-color: #ffe600; */
              width:max-content;
              /* position: relative; */
              position: absolute;
              left:-20px;
              top:50px;
              z-index:999999999999;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              max-height:0;
              /* transition: max-height 300ms; */

              .navHoverItem{
                padding:40px;

                li{
                  margin-bottom:10px;

                  &.last-child{
                    margin-bottom:0;
                  }
                }
              }
            }
          }
        }
      }
    }
`;

const Header = memo(() => {
  const {header} = dataset;
  // console.log(header);

  const onMenuItemOver = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;

    const index = Array.from(current.parentNode.children).indexOf(current);
    // console.log(index);

    const hover = current.querySelector('.navHoverWrap');
    // console.log(hover);
    hover.style.maxHeight = hover.scrollHeight + 'px';
    // console.log(hover.scrollHeight);
    const bgHover = document.querySelector('.bgHover');
    console.log(bgHover);

    if(hover.scrollHeight){
      bgHover.classList.add('on');
    }
  }, []);

  const onMenuItemOut = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;
    const hover = current.querySelector('.navHoverWrap');
    const bgHover = document.querySelector('.bgHover');

    hover.style.maxHeight = '0px';

    // console.log(hover.scrollHeight);
    bgHover.classList.remove('on');
  }, []);

  return (
    <HeaderContainer>
      <div className='bgHover'></div>
      <div className='navInner'>
        <ul className='topMenu'>
          <li><a href='#'>더본코리아</a></li>
          <li><a href='#'><img src='img/icon/top-facebook.jpg' alt='facebook-logo' /></a></li>
          <li><a href='#'><img src='img/icon/top-instagram.jpg' alt='instagram-logo' /></a></li>
        </ul>
        <div className='navWrap'>
          <a href='#'>
            <img src='img/logo.png' alt='logoImg' className='logoImg' />
          </a>
          <ul className='navItem'>
            {header.map((v, i) =>{
              return(
                <li key={v.id} className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                  <a href='#'>{v.title}</a>
                  <div className='navHoverWrap'>
                    {v.subMenu.length > 0 && (
                      <ul className='navHoverItem'>
                        {v.subMenu.map((j, k) =>{
                          return(
                            <li key={k}>
                              <a href='#'>{j.title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
});

export default Header;
