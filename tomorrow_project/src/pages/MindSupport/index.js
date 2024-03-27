import React, {memo, useEffect} from 'react';
import styled from 'styled-components';

import Title from '../../components/TitleContainer';
import PageNumber from '../../components/PageNumber';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/MinSupContentSlice';

const IndexContainer = styled.div`
    .contentContainer{
        width:100%;
        height: auto;
        color:#333333;

        .contentWrap{
            max-width:1200px;
            height:auto;
            margin:120px auto 100px;

            .contentItemWrap{
                width:1000px;
                margin:0 auto;

                .item{
                    width:100%;
                    height: 200px;
                    border:1px solid #D9D9D9;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    margin-bottom:20px;

                    .imgWrap{
                        height: 100%;
                        width:40%;
                        /* background-image: url('/img/minSup/m01.jpg'); */
                        border-radius: 10px 0 0 10px;
                        position: relative;

                        span{
                            position: absolute;
                            bottom:10px;
                            left:10px;
                            font-size:14px;
                            color:#B3B3B3;
                        }
                    }

                    .textWrap{
                        /* border-radius: 10px; */
                        border-radius: 0 10px 10px 0;
                        width:60%;
                        height: 100%;
                        padding:38px 50px;
                        background-color: #fcfcfc;
                        display: flex;
                        align-items: center;

                        .textInner{

                            .itemTit{
                                font-size:24px;
                                font-weight:700;
                                margin-bottom:6px;
                                letter-spacing:-1px;
                            }

                            .itemTxt{
                                font-size:15px;
                                color: #959595;
                                margin-bottom:18px;
                                line-height: 1.3;
                            }

                            .link{
                                width:140px;
                                height: 36px;
                                border-radius: 20px;
                                background-color: #34964B;
                                color:#ffffff;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size:14px;
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
    const { data, loading, error } = useSelector((state) => state.MinSupContentSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    return (
        <IndexContainer>
            <Title title='마음지원' txt='취업에 대한 불안감을 날릴 수 있도록 최선의 노력을 하겠습니다.' />
            <div className='contentContainer'>
                <div className='contentWrap'>
                    <ul className='contentItemWrap'>
                        {data && data.map((v, i) =>{
                            return(
                                <li className='item' key={v.id}>
                                    <div className='imgWrap' style={{backgroundImage:`url(${v.img})`}}>
                                        <span>※클릭 시 외부 사이트로 연결됩니다.</span>
                                    </div>
                                    <div className='textWrap'>
                                        <div className='textInner'>
                                            <h2 className='itemTit'>{v.title}</h2>
                                            <p className='itemTxt'>{v.txt}</p>
                                            <a href={v.url} target='_blank' className='link'>사이트 바로가기</a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                        
                    </ul>
                    <PageNumber />
                </div>
            </div>
        </IndexContainer>
    );
});

export default index;
