import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, useNavigate, useParams} from 'react-router-dom';

import Title from '../../components/TitleContainer';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/FouSupContentSlice';

const FDetailPagesContainer = styled.div`
    width:100%;

    .contentContainer{
        max-width:1200px;
        margin: 140px auto 80px;

        .topContent{
            .titleWrap{
                width:100%;
                border-top:3px solid #333333;
                border-bottom: 1px solid #D9D9D9;
                height:80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 20px;

                .title{
                    height: auto;
                    font-size:28px;
                    font-weight: 500;
                }

                .date{
                    width:max-content;
                    white-space: nowrap;
                    text-align: left;
                    color: #959595;
                }
            }

            .bannerImgWrap{
                max-width:700px;
                margin:50px auto;

                .img{
                    width:100%;
                    text-align: center;
                }
            }
        }
        .summaryWrap{
            margin-top:60px; 

            .title{
                height: auto;
                font-size:24px;
                font-weight: 500;
                margin-bottom:20px;
            }

            .formTable{
                width:100%;

                tbody{
                    border-top:2px solid #333333;

                    tr{
                        height: auto;
                        line-height: 1.3;
                        border-bottom:1px solid #D9D9D9;

                        .row{
                            padding:20px;
                            vertical-align: middle;
                        }

                        td{
                            padding:20px;
                            vertical-align: middle;

                            p{
                                margin-bottom:5px;

                                &.strong{
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }
            }
        }

        .home{
            margin: 60px auto 80px;
            width:auto;
            height:auto;
            padding:13px 60px;
            border:1px solid #34964B;
            border-radius: 2px;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            color:#34964B;
            font-weight:600;
            background-color: #fff;

        }
    }

`;

const FDetailPages = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = useParams();

    const {data, loading, error} = useSelector((state) => state.FouSupContentSlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    const onHomeClick = useCallback((e) =>{
        navigate('/fouSupport');
    }, []);

    return (
        <FDetailPagesContainer>
            <Title title='창업지원' txt='당신의 빛나는 미래 사업을 응원합니다.' />
            <div className='contentContainer'>
                {data && data.length > 0 && data.map((v, i) =>{
                    if(id === v.id){
                        return(
                            <>
                                <div className='topContent'>
                                    <div className='titleWrap'>
                                        <h2 className='title'>{v.title}</h2>
                                        <span className='date'>{v.registration} 등록</span>
                                    </div>
                                    <div className='bannerImgWrap'>
                                        <img src={v.bannerImg} className='img' alt='배너이미지' />
                                    </div>
                                </div>
                                <div className='summaryWrap'>
                                    <h1 className='title'>정책요약</h1>
                                    <table className='formTable' key={v.id}>
                                        <colgroup>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th className='row'>정책번호</th>
                                                <td>{v.id}</td>
                                                <th className='row'>정책 분야</th>
                                                <td>{v.type}</td>
                                            </tr>
                                            <tr>
                                                <th className='row'>정책 소개</th>
                                                <td colSpan={3}>{v.introduce}</td>
                                            </tr>
                                            <tr>
                                                <th className='row'>지원내용</th>
                                                <td colSpan={3}>
                                                    {v.content.map((vv, ii) =>{
                                                        return(
                                                            <div key={ii}>
                                                                <p className='strong'>{vv.title}</p>
                                                                <p>{vv.subCon1}</p>
                                                                <p>{vv.subCon2}</p>
                                                                <p>{vv.subCon3}</p>
                                                                <p>{vv.subCon4}</p>
                                                                <p>{vv.subCon5}</p>
                                                                <p>{vv.subCon6}</p>
                                                                {v.content.length > 1 && <br />}
                                                            </div>
                                                        );
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='row'>지원 규모(명)</th>
                                                <td>{v.scale}</td>
                                                <th className='row'>비고</th>
                                                <td>{v.note}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='summaryWrap'>
                                    <h1 className='title'>신청방법</h1>
                                    <table className='formTable'>
                                        <colgroup>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th className='row'>신청 절차</th>
                                                <td td colSpan={3}>{v.procedure}</td>
                                            </tr>
                                            <tr>
                                                <th className='row'>신청 사이트</th>
                                                <td td colSpan={3}>{v.site}</td>
                                            </tr>
                                            <tr>
                                                <th className='row'>제출 서류</th>
                                                <td colSpan={3}>{v.paper}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='summaryWrap'>
                                    <h1 className='title'>기타</h1>
                                    <table className='formTable'>
                                        <colgroup>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                            <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                            <col style={{width:"38%"}}></col>
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th className='row'>주관 기관</th>
                                                <td colSpan={3}>{v.HostOrganization}</td>
                                            </tr>
                                            <tr>
                                                <th className='row'>참고 사이트 i</th>
                                                <td colSpan={3}><a href={v.referenceSite1}>{v.referenceSite1}</a></td>
                                            </tr>
                                            <tr>
                                                <th className='row'>참고 사이트 ii</th>
                                                <td colSpan={3}><a href={v.referenceSite2}>{v.referenceSite2}</a></td>
                                            </tr>
                                            <tr>
                                                <th className='row'>기타</th>
                                                <td colSpan={3}>{v.etc}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        );
                    }
                })}
                <button type='button' className='home' onClick={onHomeClick}>목록</button>
            </div>
        </FDetailPagesContainer>
    );
});

export default FDetailPages;
