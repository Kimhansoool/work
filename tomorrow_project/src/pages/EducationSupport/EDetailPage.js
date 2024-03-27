import React, {memo, useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';

import Title from '../../components/TitleContainer';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/EduSupContentSlice';

const DetailPagesContainer = styled.div`
    width:100%;
    height:auto;

    .contentWrap{
        width:1200px;
        margin:0 auto;
        color:#333333;

        .summaryWrap{
            margin-top:60px;
            width:100%;

            &:first-child{
                margin-top:140px;
            }

            .title{
                height: auto;
                font-size:24px;
                font-weight: 500;
                margin-bottom:20px;
            }

            .formTable{
                width:100%;
                /* display: table; */

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

const DetailPages = memo(() => {
    const navigate = useNavigate();
    const {id} = useParams();

    const onHomeClick = useCallback((e) =>{
        navigate('/eduSupport');
    }, []);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.EduSupContentSlice);
    // console.log(data.id);

    useEffect(() =>{
        dispatch(getList());
    }, []);

    return (
        <DetailPagesContainer>
        <Title title='교육지원' txt='취업 준비생 여러분이 다양한 기술을 부담없이 배울 수 있도록 최선을 다합니다.' />
        {data && data.map((v, i) =>{
            if(id === v.id){
                return(
                    <div className='contentWrap'>
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
                                        <th className='row'>정책 번호</th>
                                        <td>{v.id}</td>
                                        <th className='row'>정책 분야</th>
                                        <td>{v.type}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>정책 소개</th>
                                        <td colSpan={3}>{v.introduce}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>지원 내용</th>
                                        <td colSpan={3}>
                                            {v.content.map((vv, ii) =>{
                                                return(
                                                    <div key ={ii}>
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
                            <h1 className='title'>신청자격</h1>
                            <table className='formTable' key={v.id}>
                                <colgroup>
                                    <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                    <col style={{width:"38%"}}></col>
                                    <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                    <col style={{width:"38%"}}></col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th className='row'>연령</th>
                                        <td>{v.age}</td>
                                        <th className='row'>취업 상태</th>
                                        <td>{v.employmentStatus}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>학력/전공</th>
                                        <td colSpan={3}>{v.major}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>거주지 및 소득</th>
                                        <td colSpan={3}>
                                            {v.ResidenceAndIncome.length > 0 && v.ResidenceAndIncome.map((vv, ii) =>{
                                                return(
                                                    <div key={ii}>
                                                        <p className='strong'>{vv.title}</p>
                                                        <p>{vv.subCon1}</p>
                                                        <p>{vv.subCon2}</p>
                                                        <p>{vv.subCon3}</p>
                                                        <p>{vv.subCon4}</p>
                                                        <p>{vv.subCon5}</p>
                                                        <p>{vv.subCon6}</p>
                                                        {v.ResidenceAndIncome.length > 1 && <br />}
                                                    </div>
                                                );
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='row'>사업 운영 기간</th>
                                        <td>{v.operatingPeriod}</td>
                                        <th className='row'>사업 신청 기간</th>
                                        <td>{v.applicationPeriod}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>참고 사항</th>
                                        <td colSpan={3}>
                                            {v.reference.length > 0 && v.reference.map((vv, ii)=>{
                                                return(
                                                    <div key={ii}>
                                                        <p className='strong'>{vv.title}</p>
                                                        <p>{vv.subCon1}</p>
                                                        <p>{vv.subCon2}</p>
                                                        <p>{vv.subCon3}</p>
                                                        <p>{vv.subCon4}</p>
                                                        <p>{vv.subCon5}</p>
                                                        <p>{vv.subCon6}</p>
                                                        {v.reference.length > 1 && <br />}
                                                    </div>
                                                );
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='row'>참여 제한 대상</th>
                                        <td colSpan={3}>
                                            {v.ParticipationRestrictions.length > 0 && v.ParticipationRestrictions.map((vv, ii)=>{
                                                return(
                                                    <div key={ii}>
                                                        <p className='strong'>{vv.title}</p>
                                                        <p>{vv.subCon1}</p>
                                                        <p>{vv.subCon2}</p>
                                                        <p>{vv.subCon3}</p>
                                                        <p>{vv.subCon4}</p>
                                                        <p>{vv.subCon5}</p>
                                                        <p>{vv.subCon6}</p>
                                                        {v.ParticipationRestrictions.length > 1 && <br />}
                                                    </div>
                                                );
                                            })}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='summaryWrap'>
                            <h1 className='title'>신청방법</h1>
                            <table className='formTable' key={v.id}>
                                <colgroup>
                                    <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                    <col style={{width:"38%"}}></col>
                                    <col style={{width:"12%", backgroundColor:"#f5f5f5"}}></col>
                                    <col style={{width:"38%"}}></col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th className='row'>신청 절차</th>
                                        <td colSpan={3}>{v.procedure}</td>
                                    </tr>
                                    <tr>
                                        <th className='row'>신청 사이트</th>
                                        <td colSpan={3}><a href={v.site} target='_blank'>{v.site}</a></td>
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
                            <table className='formTable' key={v.id}>
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

                        <button type='button' className='home' onClick={onHomeClick}>목록</button>
                    </div>
                );
            }
        })}
        </DetailPagesContainer>
    );
});

export default DetailPages;
