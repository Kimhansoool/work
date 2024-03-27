import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Title from '../../components/TitleContainer';
import PageNumber from '../../components/PageNumber';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/FouSupContentSlice';

const IndexContainer = styled.div`
    width:100%;
    height: auto;
    color:#333333;

    .contentContainer{
        max-width:1200px;
        height:auto;
        margin:120px auto 0;

        .contentWrap{
            display: flex;
            flex-wrap: wrap;
            /* background-color: #ff05; */

            .contentItem{
                width:285px;
                margin-left:20px;
                border-radius:10px;
                border:1px solid #D9D9D9;
                height:330px;
                margin-bottom:40px;

                &:first-child{
                    margin-left:0;
                }

                &:nth-child(5n){
                    margin-left:0;
                }

                .link{
                    .img{
                        width:100%;
                        object-fit: cover;
                    }

                    .textWrap{
                        padding:20px;

                        .title{
                            font-size:20px;
                            font-weight: 600;
                            height: auto;
                            margin-bottom:8px;
                            width:100%;
                            display: block;
                            
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .subTit{
                            font-size:14px;
                            color:#959595;
                            width:100%;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;

                        }

                        .progWrap{
                            margin-top:16px;
                            display: flex;
                            justify-content: space-between;
                            width:100%;
                            height: auto;
                            align-items: center;

                            .progress{
                                font-size:12px;
                                width:50px;
                                height: 22px;
                                border-radius:20px;
                                border:1px solid #34964b;
                                color:#34964b;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                &.end{
                                    background-color:#f5f5f5;
                                    border:0;
                                    color:#959595;

                                }
                            }

                            .date{
                                font-size:14px;
                                color:#959595;
                            }
                        }
                    }
                }


            }
        }
    }
`;

const index = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.FouSupContentSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    return (
        <IndexContainer>
            <Title title='창업지원' txt='당신의 빛나는 미래 사업을 응원합니다.' />
            <div className='contentContainer'>
                <ul className='contentWrap'>
                    {data && data.map((v, i) =>{
                        return(
                            <li className='contentItem' key={v.id}>
                                <NavLink to={`/fouSupport/${v.id}`} className='link'>
                                    <img src={v.titImg} className='img' />
                                    <div className='textWrap'>
                                        <h3 className='title'>{v.title}</h3>
                                        <p className='subTit'>{v.subTit}</p>
                                        <div className='progWrap'>
                                            <span className={`progress ${v.progress === "종료" ? "end" : ""}`}>{v.progress}</span>
                                            <span className='date'>{v.date}</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <PageNumber />
            </div>
        </IndexContainer>
    );
});

export default index;
