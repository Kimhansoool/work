import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/AppliedProjectSlice';
import { noticeList } from '../../slices/NoticeSlice';

const BannerContentContainer = styled.div`
    width:100%;
    height: auto;
    margin:60px 0 130px;
    text-align: center;

    .supContentWrap{
        width:100%;
        height:480px;
        background-color: #f9f9f9;

        .supContentInner{
            max-width: 1200px;
            margin:0 auto;
            padding-top:60px;

            .supConTitle{
                font-size:30px;
                font-weight: 700;
            }

            .supContxt{
                font-size:16px;
                margin-top:10px;
                color:#959595;
            }

            .supContentItemWrap{
                display: flex;
                flex-wrap: wrap;
                margin-top:30px;

                .supContentItem{
                    border-radius: 10px;
                    border:1px solid #d9d9d9;
                    background-color: #fff;
                    height:100px;
                    width:calc(50% - 10px);
                    margin-left:20px;
                    margin-bottom:10px;
                    text-align: left;
                    padding:38px 30px;
                    display: flex;

                    &:nth-child(odd){
                        margin-left:0;
                    }

                    .textWrap{
                        display: flex;
                        align-items: center;
                        width:100%;

                        .badge{
                            display: block;
                            width:max-content;
                            white-space: nowrap;
                            border:1px solid #0F7CDF;
                            font-size:14px;
                            color:#0F7CDF;
                            padding:5px 10px;
                            border-radius: 2px;
                            margin-right:10px;
                        }

                        .title{
                            font-size:18px;
                        }
                    }
                }
            }
        }
    }

    .noticeWrap{
        max-width: 1200px;
        margin:0 auto;
        height: auto;
        margin-top:130px;
        display: flex;
        flex-wrap: wrap;

        .noticeInner{
            width:calc(70% - 10px);

            .titleWrap{
                display: flex;
                

                span{
                    font-size:22px;
                    margin-right:15px;
                    color:#959595;
                    font-weight: 800;

                    &.on{
                        color:#333333;
                        border-bottom: 4px solid #333333;
                        padding-bottom:3px;
                    }

                    &:last-child{
                        margin-right:0;
                    }

                    .link{
                        font-size:inherit;
                        font-weight: inherit;
                        color:inherit;
                    }
                }
            }

            .contentWrap{
                margin-top:30px;
                width:100%;
                height:250px;
                border:1px solid #d9d9d9;
                background-color: #f9f9f9;
                border-radius: 10px;
                padding:16px 30px;

                .contentItem{
                    height:43px;
                    color:#333333;
                    padding:10px 0;
                    border-bottom: 1px solid #d9d9d9;

                    &:last-child{
                        border-bottom: 0;
                    }

                    a{
                        width:100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /* background-color: #ff0; */
                        padding:5px 0;

                        .title{
                            height: auto;
                            font-size:16px;
                        }

                        .date{
                            font-size:16px;
                        }

                    }

                    
                }
            }
        }

        .reminderInner{
            margin-left:20px;
            width:calc(30% - 10px);
            /* background-color: #0F7CDF; */

            .titleWrap{
                display: flex;
                justify-content: left;

                span{
                    text-align: left;
                    font-size:22px;
                    margin-right:15px;
                    color:#959595;
                    font-weight: 800;
                }
            }

            .contentWrap{
                display: block;
                border-radius: 10px;
                margin-top:36px;
                width:100%;
                height:250px;
                background-image: url('/img/reminder.png');
            }
        }
    }
`;

const BannerContent = memo(() => {

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.AppliedProjectSlice);
    const {data: noticeData} = useSelector((state) => state.NoticeSlice);

    useEffect(() =>{
        dispatch(getList());
        dispatch(noticeList())
    }, []);

    return (
        <BannerContentContainer>
            <div className='supContentWrap'>
                <div className='supContentInner'>
                    <h1 className='supConTitle'>신청 중인 지원 사업</h1>
                    <p className='supContxt'>현재 접수 중인 지원 사업에 대해 알아보세요.</p>
                    <div className='supContentItemWrap'>
                        {data && data.map((v, i) =>{
                            return(
                                <a href={v.url} className='supContentItem' key={v.id}>
                                    <div className='textWrap'>
                                        <span className='badge'>{v.badge}</span>
                                        <h4 className='title'>{v.title}</h4>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='noticeWrap'>
                <div className='noticeInner'>
                    <div className='titleWrap'>
                        <span className='notice on'><NavLink to='#' className='link'>공지사항</NavLink></span>
                        <span className='community'><NavLink to='/communityHome' className='link'>커뮤니티</NavLink></span>
                        <span className='seeMore'><NavLink to='#' className='link'>더보기</NavLink></span>
                    </div>
                    <ul className='contentWrap'>
                        {noticeData && noticeData.map((v, i) =>{
                            return(
                                <li className='contentItem' key={v.id}>
                                    <a href={v.url}>
                                        <span className='title'>{v.title}</span>
                                        <span className='date'>{v.date}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='reminderInner'>
                    <div className='titleWrap'>
                        <span className='reminder'>알리미</span>
                    </div>
                    <a href='https://www.youthcenter.go.kr/main.do' target='_blank' className='contentWrap'></a>
                </div>
            </div>
        </BannerContentContainer>
    );
});

export default BannerContent;
