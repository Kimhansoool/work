import React, {memo, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import mq from '@/styles/MediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/NewsHeaderSlice';

const NewsHeaderContainer = styled.div`
    .titleContainer{
        width:100%;
        height:500px;
        padding-top:150px;
        background-image: url("/img/news_sec_Bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        text-align: center;

        ${mq.maxWidth('md')`
            padding-top:70px;
        `}

        .titleInner{
            width:100%;
            height:150px;

            .mainTitle{
                font-size:40px;
                font-weight:600;
                margin-bottom: 30px;
            }

            .divider{
                width:50px;
                border: 1px solid #000;
            }

            .mainSubTitle{
                margin-top:30px;
                font-size:20px;
            }
        }

        .mainTab{
            margin:0 auto;
            max-width:1000px;
            display: flex;
            margin-top:100px;
            padding:0 20px;

            ${mq.maxWidth('md')`
                flex-wrap:wrap;
                margin-top:0;
            `}

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                width:20%;
                height:40px;
                background-color: #fff;
                border: 1px solid #aaaaaa90;
                border-left:0;

                ${mq.maxWidth('xl')`
                    font-size:14px;
                `}

                ${mq.maxWidth('md')`
                    width:100%;
                `}

                &:first-child{
                    border-left:1px solid #aaaaaa90;
                }

                &.on{
                    background-color: #ffe600;
                        
                    }
                
                .titleLink{
                    width:100%;
                    /* cursor: pointer; */
                    display: block;
                    padding:20px 20px;
                    font-size:16px;

                    ${mq.maxWidth('xl')`
                        font-size:14px;
                    `}

                    ${mq.maxWidth('md')`
                        font-size:16px;
                    `}
                }
            }
        }
    }
`;

const NewsHeader = memo(() => {
    const [countIndex, setCountIndex] = useState(0);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.NewsHeaderSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    // const onTabClick = useCallback((e) =>{
    //     const current = e.currentTarget;
    //     console.log(current);
    //     const TabLi = document.querySelectorAll('.Tabinner');

    //     TabLi.forEach((v, i) =>{
    //         v.classList.remove("on");
    //     });
    //     current.classList.add("on");
    // }, []);

    const handleOnClick = (e, k) =>{

        setCountIndex(k);
        console.log(e.currentTarget);
        window.localStorage.setItem("current", k);
    };

    useEffect(() =>{
        if(localStorage.getItem('current')){
            setCountIndex(Number(localStorage.getItem('current')));
        }
    }, []);

    return (
        <NewsHeaderContainer>
            <div className='titleContainer'>
                <div className='titleInner'>
                    <h3 className='mainTitle'>소식</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>다양한 이벤트와 새로운 소식을 확인하세요.</p>
                </div>
                <ul className='mainTab'>
                    {data && data.map((v, i) =>{
                        return(
                            <li key={i} className={`Tabinner ${countIndex === i && 'on'}`} onClick={e => handleOnClick(e, i)}>
                                <Link href={v.url} className='titleLink'>{v.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </NewsHeaderContainer>
    );
});

export default NewsHeader;
