import React, {memo, useEffect} from 'react';
import Link from "next/link";

import styled from 'styled-components';

import MoreBtn from '../../components/MoreBtn';
import mq from '@/styles/MediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/PaiksStorySlice';

const PalksStoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    .storyWrap{
        width:50%;
        height:300px;

        ${mq.maxWidth('lg')`
            width:100%;
            height:250px;
        `}

        .storyInner{
            background-size:cover;
            background-position:60%;
            cursor: pointer;

            display: block;
            width:100%;
            height:100%;

            ${mq.maxWidth('xl')`
                position: relative;
            `}

            &.brand{
                background-color: #253f85;
                background-size:300px;
                background-position:calc(100% - 60px) center;
                background-repeat:no-repeat;

                .textWrap{
                    margin-left:80px;
                    color:#fff;

                    ${mq.maxWidth('xl')`
                        margin-left:8%; 
                    `}

                    ${mq.maxWidth('lg')`
                        margin-left:5%;
                    `}

                    .title{
                        color:#fff;
                    }
                }
            }

            .textWrap{
                max-width: 1200px;
                margin-left:38%;
                padding-top:60px;

                ${mq.maxWidth('xxl')`
                    margin-left:66px;
                `}

                ${mq.maxWidth('xl')`
                    margin-left:8%; 
                `}

                ${mq.maxWidth('lg')`
                    margin-left:5%;
                `}

                .title{
                    width:400px;
                    font-size:46px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                    color:#071f60;

                    ${mq.maxWidth('xl')`
                        font-size:40px;
                        margin-bottom:50px;
                    `}
                }

                p{
                    margin-top:20px;
                    font-size:18px;
                    font-family: 'Noto Sans KR', sans-serif;
                    font-weight: 600;
                    margin-bottom:30px;
                    

                    ${mq.maxWidth('xl')`
                        display:none;
                    `}
                }
            }
        }
    }

`;

const PalksStory = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.PaiksStorySlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);
    
  return (
    <PalksStoryContainer>
        {data && data.map((v, i) =>{
            return(
                <section className='storyWrap' key={i}>
                    {(data.length - 1 === i) ? (
                        <div className='storyInner brand' style={{backgroundImage: `url(${v.img})`}}>
                            <div className='textWrap'>
                                <h1 className='title'>{v.title}</h1>
                                <p>{v.text}</p>
                                <MoreBtn href='#' />
                            </div>
                        </div>
                        ) : (
                        <div className='storyInner' style={{backgroundImage: `url(${v.img})`}}>
                            <div className='textWrap'>
                                <h1 className='title'>{v.title}</h1>
                                <p>{v.text}</p>
                                <MoreBtn href='#' />
                            </div>
                        </div>
                    )}  
                </section>
            );
        })}
        {/* <section className='storyWrap' style={{backgroundImage: "url(/img/main_sec1.jpg)"}}>
            <a href='#' className='storyInner'>
                <div className='textWrap'>
                    <h1 className='title'>PAIK'S COFFFEE STORY</h1>
                    <p>균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.</p>
                    <a href='#' className='moreBtn'>
                        <img src='/img/icon/view_icon.png' alt='seeMore Button' />
                    </a>
                </div>
            </a>
        </section><section className='storyWrap' style={{backgroundImage: "url(/img/main_sec2.jpg)"}}>
            <a href='#' className='storyInner'>
                <div className='textWrap'>
                    <h1 className='title'>PAIK'S COFFFEE STORY</h1>
                    <p>균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.</p>
                    <a href='#' className='moreBtn'>
                        <img src='/img/icon/view_icon.png' alt='seeMore Button' />
                    </a>
                </div>
            </a>
        </section> */}
    </PalksStoryContainer>
  );
});

export default PalksStory;
