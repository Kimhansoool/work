import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components';

import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/HeaderSlice';

import mq from '@/styles/MediaQuery'

const HeaderContainer = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #ff05; */
    padding:20px 40px;
    position: fixed;
    width:100%;
    height:120px;
    z-index: 99999999999999;
    top:0px;
    background-color: #fff;

    ${mq.maxWidth('xl')`
      height:70px;
      display:flex;
      justify-content: space-between;
      align-items:center;
      padding:0 20px;
    `}

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
      width:1200px;
      margin:0 auto;

      .topMenu{
        display: flex;
        justify-content: right;
        align-items: center;

        ${mq.maxWidth('xl')`
          display:none;
        `}
        
        li{
          margin-left:10px;
          font-size:14px;

          &:first-child::after{
            content: "|";
            margin-left:10px;
            color:#555;
          }

          .topMenuLink{
            color:#555;
          }
        }
      }

      .navWrap{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .moNav{
          background-color:#fff;
          display:none;
          position:relative;

          .hambugerBtn{
            width:32px;
            height:26px;

            span{
              display:block;
              width:100%;
              height:4px;
              background-color:#071f60;
              margin-bottom:6px;
            }
          }

          ${mq.maxWidth('xl')`
            display:block;
          `}
        }

        .logoImg{
          margin-right:20px;

          ${mq.maxWidth('xl')`
            width:110px;
            height:auto;
          `}
        }

        .navItem{
          width:100%;
          height:100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          ${mq.maxWidth('xl')`
            display:none;
          `}

          .link{
            height:100%;
            width:120px;
            padding:30px 20px;
            position: relative;
            /* padding:0 20px; */

            .navHoverWrap{
              /* background-color: #ffe600; */
              width:max-content;
              /* position: relative; */
              position: absolute;
              left:-20px;
              top:70px;
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

    .moNavWrap{
      position: fixed;
      background-color:#fafafa;
      padding:0 20px;
      top:70px;
      right:0;
      width:85%;
      height:10000px;
      z-index:999999999;
      display:none;
      

      @keyframes slurp {
        0%{
          transform:translateX(850px);
        } 100%{
          transform:translateX(0);
        }
      }

      &.active{
        display:block;
        animation:slurp 0.5s ease-in-out;
      }

      .moNavItem{
        width:100%;
        height:66px;
        /* margin-bottom:20px; */
        display:flex;
        align-items:center;
        border-bottom:1px solid #e5e5e5;

        .moNavLink{
          font-size:20px;
          
        }
      }
    }
`;

const Header = memo(() => {
  // const {header} = dataset;

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state) => state.HeaderSlice);

  useEffect(() =>{
    dispatch(getList());
  }, []);

  const onMenuItemOver = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;

    // const index = Array.from(current.parentNode.children).indexOf(current);
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

  /** Mo */
  const onMoNavClick = useCallback((e) =>{
    e.preventDefault();
    console.log("클릭됨");
    const moMenu = document.querySelector('.moNavWrap');
    // console.log(moMenu);

    moMenu.classList.toggle('active');
    
  }, []);


  return (
    <HeaderContainer>
      <div className='bgHover'></div>
      <div className='navInner'>
        <ul className='topMenu'>
          <li><Link href='#' className='topMenuLink'>더본코리아</Link></li>
          <li><Link href='#' className='topMenuLink'><img src='/img/icon/top-facebook.jpg' alt='facebook-logo' /></Link></li>
          <li><Link href='#' className='topMenuLink'><img src='/img/icon/top-instagram.jpg' alt='instagram-logo' /></Link></li>
        </ul>
        <div className='navWrap'>
          <Link href='/' className='navWrapLink'>
            <img src='/img/logo.png' alt='logoImg' className='logoImg' />
          </Link>
          <div className='moNav' >
            <div className='hambugerBtn' onClick={onMoNavClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>     
          </div>
          <ul className='navItem'>
            {data && data.map((v, i) =>{
              return(
                <li key={v.id} className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                  <Link href={v.url} >{v.title}</Link>
                  <div className='navHoverWrap'>
                    {v.subMenu.length > 0 && (
                      <ul className='navHoverItem'>
                        {v.subMenu.map((j, k) =>{
                          return(
                            <li key={k}>
                              <Link href={j.url}>{j.title}</Link>
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
      <ul className='moNavWrap'>
        <li className='moNavItem'><Link href='#' className='moNavLink'>빽다방</Link></li>
        <li className='moNavItem'><Link href='/menu/menu_new' className='moNavLink'>메뉴</Link></li>
        <li className='moNavItem'><Link href='/news/all' className='moNavLink'>소식</Link></li>
        <li className='moNavItem'><Link href='/community/coffeeClass' className='moNavLink'>커뮤니티</Link></li>
        <li className='moNavItem'><Link href='/store' className='moNavLink'>매장안내</Link></li>
        <li className='moNavItem'><Link href='#' className='moNavLink'>창업안내</Link></li>
        <li className='moNavItem'><Link href='#' className='moNavLink'>고객의 소리</Link></li>
      </ul>
    </HeaderContainer>
  );
});

export default Header;
