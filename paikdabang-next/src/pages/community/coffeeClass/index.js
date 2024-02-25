import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import mq from '@/styles/MediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CoffeeClassSlice';

import CoffeeClassHeader from '@/components/CoffeeClassHeader';

const CoffeeClassContainer = styled.div`
    margin-top:120px;
    font-family: 'Noto Sans KR', sans-serif;

    ${mq.maxWidth('xl')`
        margin-top:70px;
    `}

    .classApplyContainer{
        width:100%;
        margin-top:70px;

        .classApplyWrap{
            max-width:1200px;
            margin:0 auto;
            padding:0 20px;

            .applyInner{
                width:100%;

                .appItem{
                    border: 1px solid #e5e5e5;
                    margin-bottom:20px;

                    &:hover{
                        border: 1px solid #071f60; 
                        transition: all 0.2s ease-in;

                        .appLink{
                            .textWrap{
                                .title{
                                    color: #071f60;
                                }

                                .date{
                                    color: #071f60;
                                }
                            }
                        }
                    }

                    .appLink{
                        display: flex;

                        ${mq.maxWidth('lg')`
                            display:block;
                        `}

                        img{
                            object-fit: cover;

                            ${mq.maxWidth('lg')`
                                width:100%;
                                height:auto;
                                object-fit: contain;
                            `}
                        }

                        .textWrap{
                            padding:30px 60px;

                            ${mq.maxWidth('lg')`
                                padding:40px 50px;
                            `}

                            .state{
                                text-align: center;
                                height: 30px;
                                width:70px;
                                background-color: #333;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 50px;
                                color:#fff5;
                            }

                            .title{
                                font-size:26px;
                                margin-top:10px;
                                color:#b9b9b9;

                                ${mq.maxWidth('lg')`
                                    font-size:36px;
                                `}
                            }

                            .date{
                                font-size:16px;
                                margin-top:8px;
                                color:#333;

                                ${mq.maxWidth('lg')`
                                    font-size:24px;
                                    margin-top:12px;
                                `}
                            }
                        }
                    }
                }
            }
        }

        .navLinks{
            margin:60px auto;
            width:300px;
            height: 100%;
            text-align: center;

            .pageNumbering{
                display: flex;
                justify-content: center;
                align-items: center;

                .numItem{
                    width:30px;
                    height:30px;
                    margin-left:10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size:20px;

                    .link{
                        color:#c8c8c8;
                        padding:10px;
                        display: block;

                        &:hover{
                            color:#000;
                            font-weight: 600;
                            transition: all 0.2s ease-in;
                        }
                    }
                    
                    &:last-child{
                       border:1px solid #e5e5e5; 
                       line-height: 0.3;
                       font-size:10px;
                       margin-left:40px;

                       .link{
                            color:#000;
                        }
                    }
                }
            }
        }
    }
`;

const coffee_class = memo(() => {

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.CoffeeClassSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);
    
    return (
        <CoffeeClassContainer>
            <CoffeeClassHeader />
            <div className='classApplyContainer'>
                <div className='classApplyWrap'>
                    <ul className='applyInner'>
                        {data && data.map((v, i) =>{
                            return(
                                <li className='appItem' key={v.id}>
                                    <Link href={`/community/coffeeClass/${v.id}`} className='appLink'>
                                        <img src={v.title_img} />
                                        <div className='textWrap'>
                                            <p className='state'>{v.state}</p>
                                            <h2 className='title'>{v.title}</h2>
                                            <p className='date'>{v.start_date} - {v.end_date}</p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='navLinks'>
                    <ul className='pageNumbering'>
                        <li className='numItem'><Link href='#' className='link'>1</Link></li>
                        <li className='numItem'><Link href='#' className='link'>2</Link></li>
                        <li className='numItem'><Link href='#' className='link'>3</Link></li>
                        <li className='numItem'><Link href='#' className='link'>4</Link></li>
                        <li className='numItem'><Link href='#' className='link'>5</Link></li>
                        <li className='numItem'><Link href='#' className='link'>▶</Link></li>
                    </ul>
                </div>
            </div>
            {/* <div className='classApplyContainer'>
                <div className='classApplyWrap'>
                    <ul className='applyInner'>
                        <li className='appItem'>
                            <Link href='#' className='appLink'>
                                <img src='/img/community/classtitle/classtitleImg_01.jpg' />
                                <div className='textWrap'>
                                    <p className='state'>종료</p>
                                    <h2 className='title'>4월 커피클래스</h2>
                                    <p className='date'>2020.04.10 - 2020.04.14</p>
                                </div>
                            </Link>
                        </li>
                        <li className='appItem'>
                            <Link href='#' className='appLink'>
                                <img src='/img/community/classtitle/classtitleImg_01.jpg' />
                                <div className='textWrap'>
                                    <p className='state'>종료</p>
                                    <h2 className='title'>4월 커피클래스</h2>
                                    <p className='date'>2020.04.10 - 2020.04.14</p>
                                </div>
                            </Link>
                        </li>
                        <li className='appItem'>
                            <Link href='#' className='appLink'>
                                <img src='/img/community/classtitle/classtitleImg_01.jpg' />
                                <div className='textWrap'>
                                    <p className='state'>종료</p>
                                    <h2 className='title'>4월 커피클래스</h2>
                                    <p className='date'>2020.04.10 - 2020.04.14</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navLinks'></div>
            </div> */}
        </CoffeeClassContainer>
    );
});

export default coffee_class;
