import React, {memo, useEffect, useMemo} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mq from '../../style/MediaQuery';

import Glider from 'react-glider';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/MainInfoSlice';

const InfomationContainer = styled.div`
    margin-top:100px;
    width:100%;
    height:100%;
    text-align: center;
    color:#333;
    /* background-color: #ff0; */

    .contentWrap{
         max-width: 1200px;
        margin: 0 auto;

        ${mq.maxWidth('xl')`
            padding:0 20px;
        `}

        ${mq.maxWidth('sm')`
            padding:0 30px;
        `}

        .bannerWrap{
            border-radius: 10px;
            width:100%;
            height:120px;
            background-color: #ff0;
            background-image: url('./img/MainS-banner.png');
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;

            .textWrap{
                position: absolute;
                width:100%;
                height:100%;
                top:0;
                left:0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:0 50px;
                

                .textInner{
                    color:#fff;
                    padding-right:40px;

                    .title{
                        width:100%;
                        height:30px;
                        font-size:26px;
                        font-weight:400;
                        margin-bottom:3px;

                        .point{
                            font-weight: 600;
                            font-size:inherit;
                        }
                    }

                    .txt{
                        width:100%;
                        height:100%;
                        text-align:left;
                        line-height:1.3;

                        ${mq.maxWidth('sm')`
                            font-size:14px;
                        `}
                    }
                }

                .btn{
                    width:170px;
                    height:44px;
                    background-color: #fff;
                    border-radius:50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .checkBtn{
                        ${mq.maxWidth('md')`
                            font-size:14px;
                        `}
                    }
                }
                
            }
        }

        .customInfoWrap{
            margin-top:100px;

            .infoTitle{
                font-size:30px;
                font-weight: 700;
            }

            .infotxt{
                font-size:16px;
                margin-top:10px;
                color:#959595;
            }

            .infoInner{
                margin-top:60px;
                display: flex;
                align-items: center;

                ${mq.maxWidth('sm')`
                    padding:0 20px;
                `}

                .glider-container{
                    display: flex;
                    align-items: center;

                    .infoItem{
                        width:285px;
                        height:340px;
                        border:1px solid #D9D9D9;
                        border-radius:10px;
                        margin-left:20px;

                        &:first-child{
                            margin-left:0;
                        }

                        .imgWrap{
                            background-color: #333;
                            width:100%;
                            height:240px;
                            border-radius: 10px 10px 0 0;
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: cover;
                        }

                        .textWrap{
                            height: 100px;
                            padding:20px;
                            text-align: left;

                            .title{
                                width:100%;
                                height:auto;
                                font-size:20px;
                                font-weight: 600;
                                margin-bottom:10px;

                                ${mq.maxWidth('md')`
                                    font-size:22px;
                                `}
                            }

                            .subTit{
                                width:100%;
                                height:100%;
                                font-size: 14px;
                                color:#959595;

                                ${mq.maxWidth('md')`
                                    font-size:16px;
                                `}
                            }
                        }
                    }
                }  
            }
        }

        .govEduWrap{
            margin-top:100px;

            .eduTitle{
                font-size:30px;
                font-weight: 700;
            }

            .edutxt{
                font-size:16px;
                margin-top:10px;
                color:#959595;
            }

            .govEduInner{
                display: flex;
                flex-wrap:wrap;
                width:100%;
                height: auto;
                margin-top:60px;

                .govEduItem{
                    width:calc(50% - 10px);
                    margin-left:20px;
                    border-radius: 10px;
                    border:1px solid #D9D9D9;

                    ${mq.maxWidth('md')`
                        width:100%;
                        margin-left:0;
                        margin-bottom:20px;
                    `}

                    &:first-child{
                        margin-left:0;
                    }

                    .imgWrap{
                        background-color: #333;
                        width:100%;
                        height:240px;
                        border-radius: 10px 10px 0 0;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;

                        ${mq.maxWidth('md')`
                            height:300px;
                        `}
                    }

                    .textWrap{
                        text-align: left;
                        padding:20px 30px;


                        .title{
                            width:100%;
                            height:auto;
                            font-size:20px;
                            font-weight: 600;
                            margin-bottom:10px;

                            ${mq.maxWidth('md')`
                                font-size:24px;
                            `}
                        }

                        .subTit{
                            width:100%;
                            height:100%;
                            font-size: 14px;
                            color:#959595;

                            ${mq.maxWidth('md')`
                                font-size:16px;
                            `}
                        }
                    }
                }
            }

            .moreBtnWrap{
                margin-top:50px;

                .moreBtn{
                    color:#333;
                    width:200px;
                    height:50px;
                    border-radius: 50px;
                    border:1px solid #D9D9D9;
                    text-align: center;
                    padding:14px 57px;
                    box-sizing: border-box;
                }
            }
        }
    }

    
`;

const Infomation = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.MainInfoSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    const customInfoData = useMemo(() => data?.filter((v, i) => {
        if(v.category === "customInfo"){
            return true;
        } 
    }), [data]);

    const gobEduData = useMemo(() => data?.filter((v, i) => {
        if(v.category === "govEduInfo"){
            return true;
        } 
    }), [data]);

    // console.log(gobEduData);

    return (
        <InfomationContainer>
            <div className='contentWrap'>
                <div className='bannerWrap'>
                    <div className='textWrap'>
                        <div className='textInner'>
                            <h1 className='title'><span className='point'>당신의 취업</span>을 응원합니다.</h1>
                            <p className='txt'>취업 준비생 여러분의 성공적인 취업을 위한 다양한 정책을 확인하세요.</p>
                        </div>
                        <div className='btn'>
                            <NavLink to='/empSupport' className='checkBtn'>취업 정책 확인하기</NavLink>
                        </div>
                    </div>
                </div>
                <div className='customInfoWrap'>
                    <h1 className='infoTitle'>맞춤형 정보</h1>
                    <p className='infotxt'>가장 많이 확인하는 지원 정책에 대해 확인해보세요.</p>
                    <div className='infoInner'>
                        <Glider
                            className="glider-container"
                            hasArrows
                            slidesToShow={4}
                            slidesToScroll={4}
                            scrollLock
                            iconLeft={<div className='prevButton' style={{fontSize:"50px", transform: "translate(-50px, 20px)"}}><i className="fa-solid fa-chevron-left button"></i></div>}
                            iconRight={<div className='nextButton' style={{fontSize:"50px", transform: "translate(50px, 20px)"}}><i className="fa-solid fa-chevron-right button"></i></div>}
                            responsive={[
                                {
                                    breakpoint: 640,
                                    settings: {
                                        slidesToShow: "auto",
                                        slidesToScroll: "auto",
                                        itemWidth: 285,
                                        duration: 0.25,
                                    },
                                },
                            ]}
                        >
                        {customInfoData && customInfoData.map((v, i) =>{
                            return(
                                <a href={v.url} className='infoItem' key={v.id}>
                                    <div className='imgWrap' style={{backgroundImage:`url(${v.imgUrl})`}}></div>
                                    <div className='textWrap'>
                                        <h4 className='title'>{v.title}</h4>
                                        <p className='subTit'>{v.subTit}</p>
                                    </div>
                                </a> 
                            );
                        })}
                        </Glider>
                    </div>
                </div>
                <div className='govEduWrap'>
                    <h1 className='eduTitle'>국비교육의 모든 것!</h1>
                    <p className='edutxt'>국비교육에 대한 모든 정보를 한 눈에 확인하세요.</p>
                    <div className='govEduInner'>
                        {gobEduData && gobEduData.map((v, i) =>{
                            return(
                                <a href={v.url} className='govEduItem' key={v.id}>
                                    <div className='imgWrap' style={{backgroundImage:`url(${v.imgUrl})`}}></div>
                                    <div className='textWrap'>
                                        <h4 className='title'>{v.title}</h4>
                                        <p className='subTit'>{v.subTit}</p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                    <div className='moreBtnWrap'>
                        <a href='#' className='moreBtn'>정보 더보기</a>
                    </div>
                </div>
            </div>
        </InfomationContainer>
    );
});

export default Infomation;
