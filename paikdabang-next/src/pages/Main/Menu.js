import React, {memo, useEffect} from 'react';
import Link from "next/link";

import styled from 'styled-components';
import MoreBtn from '../../components/MoreBtn';
import mq from '@/styles/MediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/MenuSlice';

const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    .menuWrap{
        width:100%;
        height:auto;
        overflow: hidden;
        background-size:cover;
        background-repeat: no-repeat;

        ${mq.maxWidth('xl')`
            position: relative;
        `}

        &.w100{
            width:100%;

            ${mq.maxWidth('lg')`
                background-size:cover;
            `}

            .menuInner{
                cursor: pointer; 

                .textWrap{
                    ${mq.maxWidth('xxl')`
                        margin-left:5%;
                    `}
                }
            }
        }

        &.w60{
            width:60%;

            ${mq.maxWidth('lg')`
                width:100%;
                background-size:cover;
            `}

            .menuInner{
                cursor: pointer;

                .textWrap{
                    margin-left:32%;

                    ${mq.maxWidth('xxl')`
                        margin-left:8%;
                    `}

                    ${mq.maxWidth('lg')`
                        margin-left:5%;
                    `}

                    .textInner{
                        .title{
                            color:#071f60;
                        }

                        .divider{
                            background-color:#071f60;
                        }
                    }
                }
            }

            
        }

        &.w40{
            width:40%;

            ${mq.maxWidth('lg')`
                width:100%;
                background-size:cover;
            `}

            .menuInner{
            cursor: pointer;
            
                .textWrap{
                    margin:100px 0 100px 60px;

                    ${mq.maxWidth('xl')`
                        margin:60px 0;
                        margin-left:8%;
                    `}

                    ${mq.maxWidth('lg')`
                        margin-left:5%;
                    `}

                    .textInner{
                        .title{
                            color:#f1ae1d;
                            width:400px;
                        }

                        .divider{
                            background-color:#f1ae1d;
                        }

                        p{
                            width:350px;
                        }
                    }
                }
            }
        }


        &:hover img{
            transform: scale(1.02, 1.02);
            transition: all 1s ease-out;
        }
        

        .menuInner{
            display: block;

            .textWrap{
                width:400px;
                height:280px;
                margin:100px 0;
                margin-left:19%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;

                ${mq.maxWidth('xl')`
                    margin:60px 0;
                `}

                .textInner{
                    .title{
                        width:200px;
                        font-size:46px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 900;
                        color:#6b4d30;

                        ${mq.maxWidth('xl')`
                            font-size:40px;
                        `}
                    }

                    .divider{
                        width:40px;
                        height:3px;
                        background-color:#6b4d30;
                        margin:16px 0;

                        ${mq.maxWidth('xl')`
                            height:2px;
                        `}
                    }

                    p{
                        width:230px;
                        line-height: 1.4;
                        margin-top:20px;
                        font-size:18px;
                        font-family: 'Noto Sans KR', sans-serif;
                        font-weight: 600;

                        ${mq.maxWidth('xl')`
                            display:none;
                        `}
                    }
                }                
            }

            img{
                object-fit: cover;
                width:100%;
                height:100%;
            }
        }
    }
`;

const Menu = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.MenuSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

  return (
    <MenuContainer>
        {data && data.map((v, i) =>{
            return(
                <section className={`menuWrap w${v.state}`} key={i} style={{backgroundImage: `url(${v.img})`}}>
                    <div className='menuInner'>
                        <div className='textWrap'>
                            <div className='textInner'>
                                <h1 className='title'>{v.title}</h1>
                                <div className='divider'></div>
                                <p>{v.text}</p>
                            </div>
                            <MoreBtn href={v.url} />
                        </div>
                    </div>
                </section>
            );
        })}

      {/* <section className='menuWrap 100w'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>FRESH COFFEE</h1>
                <div className='divider'></div>
                <p>신선한 뉴크롭 원두를 사용하여 추출한 커피메뉴!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec1.jpg' alt='CoffeeMenuBanner' />
        </a>
      </section>
    <section className='menuWrap w60'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>VARIOUS BEVERAGE</h1>
                <div className='divider'></div>
                <p>에이드, 티, 주스 등 취향대로 골라 먹는 즐거움!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec2.jpg' alt='CoffeeMenuBanner' />
        </a>
    </section>
    <section className='menuWrap w40'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>SWEET PAIK'S CCINO</h1>
                <div className='divider'></div>
                <p>달콤 시원한 빽다방 시그니처 메뉴!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec3.jpg' alt='CoffeeMenuBanner' />
        </a>
    </section> */}
      
    </MenuContainer>
  );
});

export default Menu;
