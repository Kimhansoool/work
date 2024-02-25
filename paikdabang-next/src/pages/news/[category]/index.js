import React, {memo, useCallback, useEffect, useMemo} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import mq from '@/styles/MediaQuery';
import NewsHeader from '@/components/NewsHeader';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/NewsSlice';

const IndexContainer = styled.div`
    margin-top:120px;

    ${mq.maxWidth('xl')`
        margin-top:70px;
    `}

    .contentContainer{
        max-width:1200px;
        margin:60px auto;

        .contentWrap{
            width:100%;

            thead{
                border-top:2px solid #071F60;
                border-bottom:1px solid #c8c8c8;

                td{
                    font-size:16px;
                    text-align:center;
                    padding:18px 15px;
                    color:#071F60;
                    font-weight:500;

                    ${mq.maxWidth('sm')`
                        font-size:15px;
                    `}
                }
            }

            tbody{
                tr{
                    border-bottom:1px solid #c8c8c8;

                    &:hover{
                        background-color:#071F60;

                        td{
                            color:#fff;
                            line-height:1.3;

                            ${mq.maxWidth('lg')`
                                padding:28px 26px; 
                                font-size:15px;
                            `}

                            ${mq.maxWidth('md')`
                                font-size:13px;
                                padding:24px 20px; 
                            `}

                            ${mq.maxWidth('sm')`
                                font-size:12px;
                                padding:20px 20px; 
                            `}

                            .conLink{
                                color:#fff;

                                ${mq.maxWidth('lg')`
                                    width:300px;
                                    display:inline-block;
                                    
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    overflow: hidden;
                                `}

                                ${mq.maxWidth('md')`
                                    font-size:14px;
                                `}

                                ${mq.maxWidth('sm')`
                                    width:230px;
                                    font-size:12px;
                                `}
                            }
                        }
                    }
                    
                    td{
                        padding:28px 30px; 
                        text-align:center;
                        color:#333333;
                        line-height:1.3;
                        vertical-align:middle;

                        ${mq.maxWidth('lg')`
                            padding:28px 26px; 
                            font-size:15px;
                        `}

                        ${mq.maxWidth('md')`
                            font-size:13px;
                            padding:24px 20px; 
                        `}

                        ${mq.maxWidth('sm')`
                            font-size:12px;
                            padding:20px 20px; 
                        `}

                        &:nth-child(3){
                            text-align:left;
                        }

                        .conLink{
                            color:#333333;

                            ${mq.maxWidth('lg')`
                                width:300px;
                                display:inline-block;
                                
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            `}

                            ${mq.maxWidth('md')`
                                font-size:14px;
                            `}

                            ${mq.maxWidth('sm')`
                                width:230px;
                                font-size:12px;
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
`;

const index = memo(() => {
    const router = useRouter();
    const {category} = router.query;
    console.log(category);

    const {data, loading, error} = useSelector((state) => state.NewsSlice);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getList({category: category}));
    }, [category]);

    return (
        <IndexContainer>
            <NewsHeader />
            <div className='contentContainer'>
                <table className='contentWrap'>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>제목</td>
                            <td>등록일</td>
                            <td>조회수</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data && Array.isArray(data) && data.map((v, i) =>{
                        return(
                        <tr key={i}>
                            <td>{v.num}</td>
                            <td>{v.group}</td>
                            <td><Link href={`/news/${category}/${v.id}`} className='conLink'>{v.title}</Link></td>
                            <td>{v.regi_date}</td>
                            <td>{v.view}</td>
                        </tr>
                        );
                    })}

                    </tbody>
                </table>
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
        </IndexContainer>
    );
});

export default index;
