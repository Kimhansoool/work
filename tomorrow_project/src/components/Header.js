import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import mq from '../style/MediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/HeaderSlice';

const HeaderContainer = styled.div`
    position: static;
    width:100%;
    height:100px;
    background-color: #fff;
    margin: 0 auto;
    border-bottom:1px solid #d9d9d9;

    ${mq.maxWidth('xl')`
        height:70px;
    `}

    .bgHover{
        position: absolute;
        width:100%;
        height:0;
        top:100px;
        left:0;
        background-color: #f9f9f9;
        z-index:10;

        &.on{
            height: 200px;
        }
    }

    .headerWrap{
        padding:0 30px;
        max-width: 1200px;
        height: 100%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navWrap{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logoWrap{
                width:120px;

                .logo{
                    width:100%;
                    height: auto;
                }
            }
            
            .navInner{
                display: flex;
                padding-left:100px;

                .navItem{
                    position: relative;

                    ${mq.maxWidth('xl')`
                        display:none;
                    `}

                    .subMenuWrap{
                        width:200px;
                        position: absolute;
                        left:50%;
                        top:50px;
                        transform: translateX(-50%);
                        text-align: center;
                        overflow: hidden;
                        max-height:0;
                        z-index:20;
                        /* background-color: #0f05; */

                        .subMenuInner{
                            .subMenuItem{
                                &:first-child{
                                    padding-top:50px;
                                }
                                padding-bottom:15px;
                            }
                        }
                    }

                    .Mainlink{
                        font-size: 16px;
                        line-height: 1.6;
                        font-weight: 500;
                        padding:30px 15px;

                        &:hover{
                            color:#1F7A34;
                            font-weight:800;
                            border-bottom:3px solid #1F7A34;
                        }
                    }
                }
            }
        }

        .infoNavWrap{
            display: flex;

            .infoNavItem{

                &:last-child::before{
                    content:"·";
                    margin:0 5px;
                }
            }
        }
    }


`;

const Header = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.HeaderSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    const onMenuItemOver = useCallback((e) =>{
        e.preventDefault();
        const current = e.currentTarget;
        const hoverItem = current.querySelector('.subMenuWrap');
        const bgHover = document.querySelector('.bgHover');

        hoverItem.style.maxHeight = hoverItem.scrollHeight + 'px';

        if(hoverItem.scrollHeight){
            bgHover.classList.add('on');
        }
    }, []);

    const onMenuItemOut = useCallback((e) =>{
        e.preventDefault();
        const current = e.currentTarget;
        const hoverItem = current.querySelector('.subMenuWrap');
        const bgHover = document.querySelector('.bgHover');

        hoverItem.style.maxHeight = '0px';
        bgHover.classList.remove('on');
    }, []);

    return (
        <HeaderContainer>
            {/* {JSON.stringify(data)} */}
            <div className='bgHover'></div>
            <div className='headerWrap'>
                <div className='navWrap'>
                    <div className='logoWrap'>
                        <NavLink to='/'><img src='/img/logo.png' className='logo' alt='내일응원로고' /></NavLink>
                    </div>
                    <ul className='navInner'>
                        {data && data.map((v, i) =>{
                            return(
                                <li className='navItem' key={v.id} onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                                    <NavLink to={`/${v.url}`} className='Mainlink'>{v.title}</NavLink>
                                    <div className='subMenuWrap'>
                                        <ul className='subMenuInner'>
                                            {v.subMenu.map((j, k) =>{
                                                return(
                                                    <li className='subMenuItem' key={k}>
                                                        <a href={j.url} className='subLink'>{j.title}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='infoNavWrap'>
                    <li className='infoNavItem'>
                        <NavLink to='#' className='link'>회원가입</NavLink>
                    </li>
                    <li className='infoNavItem'>
                        <a href='/login' className='link'>로그인</a>
                    </li>
                </ul>
                {/* <div className='moNav' >
                    <div className='hambugerBtn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>     
                </div> */}
            </div>
            {/* <ul className='moNavWrap'>
                <li className='moNavItem'><a href='#' className='moMainLink'>취업지원</a></li>
                <li className='moNavItem'><a href='#' className='moMainLink'>창업지원</a></li>
                <li className='moNavItem'><a href='#' className='moMainLink'>마음지원</a></li>
                <li className='moNavItem'><a href='#' className='moMainLink'>교육지원</a></li>
                <li className='moNavItem'><a href='#' className='moMainLink'>금전복지</a></li>
                <li className='moNavItem'><a href='#' className='moMainLink'>커뮤니티</a></li>
            </ul> */}
        </HeaderContainer>
    );
});

export default Header;
