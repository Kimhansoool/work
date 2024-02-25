import React, {memo, useEffect, useCallback} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import mq from '@/styles/MediaQuery';
import NewsHeader from '@/components/NewsHeader';

// 리덕스 관련 모듈
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '@/slices/NewsSlice';

const NewsContentContainer = styled.div`
    margin-top:120px;

    ${mq.maxWidth('xl')`
        margin-top:70px;
    `}

    .contentWrap{
        max-width: 1200px;
        margin:80px auto;
        text-align:center;

        .titleContainer{
            max-width:1200px;
            margin-bottom:40px;
            padding:35px 50px;
            border-top:1px solid #0e347e;
            border-bottom:1px solid #0e347e;

            ${mq.maxWidth('lg')`
                padding:35px 40px;
            `}

            .titleInner{
                display:flex;
                align-items:center;
                justify-content:space-between;
                flex-wrap:wrap;

                .title{
                    display:flex;

                    ${mq.maxWidth('lg')`
                        width:100%;
                        margin-bottom:12px;
                    `}

                    .group{
                        font-size:24px;
                        color:#919191;
                        font-weight:600;

                        ${mq.maxWidth('md')`
                            font-size:18px;
                        `}
                    }

                    h2{
                        font-size:24px;
                        color:#071F60;
                        font-weight:500;
                        margin-left:8px;

                        ${mq.maxWidth('md')`
                            font-size:18px;
                        `}
                    }
                }

                .info{
                    display:flex;
                    align-items:center;
                    color:#999999;
                    font-size:15px;

                    .divider{
                        margin:0 10px;
                        font-size:13px;
                    } 
                }
            }
        }

        .contentImg{
           width:70%; 
        }

        .buttonContainer{
            margin-top:60px;
            

            .home{
                cursor: pointer;
                font-size:16px;
                width:260px;
                height:50px;
                border:0px;
                background-color:#0e347e;
                

                .link{
                    box-sizing:border-box;
                    padding:13px 109px;
                    color:#fff;
                }
            }
            
        }
    }
    
`;

const Id = memo(() => {
    const router = useRouter();
    const {id, category} = router.query;
    console.log(category);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.NewsSlice);

    useEffect(() =>{
        if(id){
            dispatch(getItem({id: id}));
        }
    }, [id]);

    return (
        <NewsContentContainer>
            <NewsHeader />
            <div className='contentWrap'>
                {data && (
                    <>
                        <div className='titleContainer'>
                            <div className='titleInner'>
                                <div className='title'>
                                    <span className='group'>[{data.group}]</span>
                                    <h2>{data.title}</h2>
                                </div>
                                <div className='info'>
                                    <span>{data.regi_date}</span>
                                    <span className='divider'>|</span>
                                    <span>조회수 {data.view}</span>
                                </div>
                            </div>
                        </div>
                        <img className='contentImg' src={data.content_img} />

                        <div className='buttonContainer'>
                            <button className='home'><Link href='/news/all' className='link'>목록</Link></button>
                        </div>
                    </>
                )}
                
            </div>
        </NewsContentContainer>
    );
});

export default Id;
