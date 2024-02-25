import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

const HeaderContainer = styled.nav`
    position: sticky;
    top:40px;
    left:0;
    /* background-color: #065; */
    width:100%;
    height:90px;
    z-index: 99999999;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;

    &:hover{
      background-color: #ffffff;

      .logoImg{
        filter:brightness(0)  invert(17%) sepia(61%) saturate(5015%) hue-rotate(348deg) brightness(82%) contrast(93%);
      }

      .iconWrap{
          a{
            img{
              filter: brightness(0);
            }
          }
        }

      .MenuWrap{
        .mainMenuWrap{
          .mainMenuItem{
            .link{
              color:#000;
            }
          }
        }
      }
    }
    .MenuWrap{
      display: flex;
      align-items: center;

      .mainMenuWrap{
        display: flex;
        margin-left:50px;

        .mainMenuItem{

          .link{
            font-size:16px;
            font-weight: 600;
            color:#fff;
            margin-right:40px;
          }

          .subMenuWrap{
            box-sizing: border-box;
            position: absolute;
            width:100%;
            top:90px;
            left:0;
            background-color: #fff;
            z-index:999999999999;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            max-height:0;
            transition: max-height 180ms ease-out;

            .subMenuInner{
              max-width:100%;
              height:100%;
              box-sizing: border-box;
              padding:50px 280px 100px 280px;
              display: flex;

              .common{
                width:200px;

                .subMenuItem{
                  margin-right:130px;
                  margin-bottom:14px;
                }

                a{
                  font-size:14px;
                }
              }

              .each{
                border-left:1px solid #eeeeee;
                height:max-content;
                width:200px;

                .subMenuItem{
                  padding-left:40px;
                  margin-bottom:14px;
                }

                a{
                  font-size:14px;
                  color:#a1a1a1;
                }
              }

              .eachImg{
                display: flex;
                margin-left:280px;
                height: auto;

                img{
                  width:200px;
                  height:auto;
                  margin-left:20px;
                }
              }
            }
          }
        }
      }
    }

    .iconWrap{
      display: flex;
      align-items: center;

      a{
        margin-left:30px;
      }
    }
`;

const Header = memo(() => {

  const { header } = dataset;

  const onMenuItemOver = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;

    const index = Array.from(current.parentNode.children).indexOf(current);
    console.log(index);

    const sub = current.querySelector('.subMenuWrap');
    console.log(sub);
    sub.style.maxHeight = sub.scrollHeight + 'px';
    console.log(sub.scrollHeight);
  }, []);

  const onMenuItemOut = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;
    const sub = current.querySelector('.subMenuWrap');
    sub.style.maxHeight = '0px';
  }, []);

  return (
    <HeaderContainer>
      <div className='MenuWrap'>
        <a href='#'><img className='logoImg' alt='logoImg' src='img/logo.png'/></a>
        <ul className='mainMenuWrap'>
            {header.map((v, i) =>{
              return(
                <li key={i} className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                  <a href={v.url} className='link'>{v.title}</a>
                  <div className="subMenuWrap">
                    {(v.leftchildren.length > 0 || v.children.length > 0 || v.childBanners.length > 0) && (
                      <div className='subMenuInner'>
                    {v.leftchildren.length > 0 && (
                      <ul className='common'>
                        {v.leftchildren.map((vv, ii) => {
                          return (
                            <li key={`${i}-${ii}`} className='subMenuItem'>
                              <a href={vv.url}>{vv.title}</a>
                            </li>
                          )
                        })}
                      </ul>
                    )} 

                    {v.children.length > 0 && (
                      <ul className='each'>
                        {v.children.map((vv, ii) => {
                          return (
                            <li key={`${i}-${ii}`} className='subMenuItem'>
                              <a href={vv.url}>{vv.title}</a>
                            </li>
                          )
                        })}
                      </ul>
                    )} 
                      {v.childBanners.length > 0 && (
                        <ul className='eachImg'>
                          {v.childBanners.map((vv, ii) => {
                            return (
                              <li key={`${i}-${ii}`}>
                                <a href={vv.url}><img src={vv.title} alt='banner' width={50}/></a>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
        <ul className='iconWrap'>
          <li><a href='#'><img alt='user' src='img/icon/top_user.png' /></a></li>
          <li><a href='#'><img alt='search' src='img/icon/top_search.png' /></a></li>
          <li><a href='#'><img alt='wish' src='img/icon/top_wish.png' /></a></li>
          <li><a href='#'><img alt='cart' src='img/icon/top_cart.png' /></a></li>
        </ul>
    </HeaderContainer>
  );
});

export default Header;
