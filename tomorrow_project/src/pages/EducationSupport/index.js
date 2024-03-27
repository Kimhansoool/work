import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';

import Title from '../../components/TitleContainer';
import PageNumber from '../../components/PageNumber';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/EduSupContentSlice';

const IndexContainer = styled.div`
    width:100%;
    color:#333333;
    
    .contentWrap{
        max-width: 1200px;
        height: auto;
        margin:auto;
        margin-bottom:100px;

        .searchWrap{
            margin-top:120px;
            border:1px solid #B3B3B3;
            border-radius: 10px;
            padding:32px 50px;
            color:#333333;
            display: flex;
            align-items: center;
            justify-content: center;

            label{
                font-size:18px;
                font-weight: 500;
                margin-right:20px;
            }

            select, input {
                border:1px solid #959595;
                border-radius: 4px;
                height: 38px;
                margin-right:40px;
                padding:0 14px;
            }
            .keySearchWrap{
                .keySearch{
                    margin-right:0;
                }
            }
        }

        .policyContentWrap{
            margin-top:90px;

            .total{
                text-align: center;
                font-size:24px;
                margin-bottom:50px;

                .point{
                    color:#34964B;
                    font-size:inherit
                }
            }

            .policyItem{
                width: 1200px;
                margin:0 auto;

                thead{
                    width:100%;
                    height:50px;
                    border-top:2px solid #333333;
                    border-bottom:1px solid #d9d9d9;
                    
                    tr{
                        height: 100%;
                        width:100%;
                        line-height: 50px;
                        text-align: center;

                        .num{width:5%;}

                        .reg{width:15%;}

                        .tit{width:45%;}

                        .pro{width:10%;}

                        .key{width:25%;}
                    }
                }

                tbody{
                    text-align: center;

                    tr{
                        border-bottom: 1px solid #d9d9d9;


                        td{
                            padding:18px 0;


                            &.reg{
                            }

                            &.pro{
                                border:1px solid #34964B;
                                display: inline-block;
                                padding:5px 0;
                                width:50px;
                                font-size:12px;
                                color:#34964B;
                                border-radius: 30px;

                                &.end{
                                    border:0;
                                    background-color:#F5F5F5;
                                    color: #959595;
                                }

                                &.examine{
                                    border:1px solid #0F7CDF;
                                    color:#0F7CDF;
                                }
                            }

                            &.tit{
                                text-align: left;
                                width: 45%;
                            }

                            &.key{
                                width:25%;
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
    const [revData, setRevData] = useState([]);
    const [regionSearch, setRegionSearch] = useState('');
    const [titleSearch, setTitleSearch] = useState('');
    const [keywordSearch, setKeywordSearch] = useState('');
    const titleSearchRef = useRef();
    const keywordSearchRef = useRef();

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.EduSupContentSlice);

    useEffect(() =>{
        dispatch(getList({
            regionSearch: regionSearch,
            titleSearch: titleSearch,
            keywordSearch, keywordSearch
        }));
    }, [regionSearch, titleSearch, keywordSearch]);

    useEffect(() =>{
        if(data){
            const reverseData = [...data];
            const tmp = reverseData.reverse();
            setRevData(tmp);
        }
    }, [data]);

    const onRegionSearch = useCallback((e) =>{
        setRegionSearch(e.currentTarget.value);
    },[]);

    const onTitleSearch = useCallback((e) =>{
        setTitleSearch(titleSearchRef.current.value);
    }, []);

    const onKeywordSearch = useCallback((e) =>{
        setKeywordSearch(keywordSearchRef.current.value);
    }, []);

    return (
        <IndexContainer>
            <Title title='교육지원' txt='여러분이 다양한 기술이나 교육을 받으실 수 있도록 최선을 다합니다.' />
            <div className='contentWrap'>
                <form className='searchWrap'>
                    <div className='regSearchWrap'>
                        <label htmlFor='regionSearch'>지역 검색</label>
                        <select className='regSearch' id='regionSearch' onChange={onRegionSearch}>
                            <option value='전체'>전체</option>
                            <option value='고용노동부'>고용노동부</option>
                            <option value='서울특별시'>서울특별시</option>
                            <option value='인천광역시'>인천광역시</option>
                            <option value='대전광역시'>대전광역시</option>
                            <option value='세종특별자치시'>세종특별자치시</option>
                            <option value='대구광역시'>대구광역시</option>
                            <option value='부산광역시'>부산광역시</option>
                            <option value='광주광역시'>광주광역시</option>
                        </select>
                    </div>
                    <div className='titSearchWrap'>
                        <label htmlFor='titleSearch'>제목 검색</label>
                        <input type='text' id='titleSearch' className='titSearch' ref={titleSearchRef} onChange={onTitleSearch} />
                    </div>
                    <div className='keySearchWrap'>
                        <label htmlFor='keywordSearch'>키워드 검색</label>
                        <input type='text' id='keywordSearch' className='keySearch' ref={keywordSearchRef} onChange={onKeywordSearch} />
                    </div>
                </form>
                <div className='policyContentWrap'>
                    <h1 className='total'>총 <span className='point'>{data?.length}</span>개의 정책이 있습니다.</h1>
                    <table className='policyItem'>
                        <thead>
                            <tr>
                                <th className='num'>번호</th>
                                <th className='reg'>지역</th>
                                <th className='tit'>제목</th>
                                <th className='pro'>진행여부</th>
                                <th className='key'>키워드</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && revData && revData.length>0 && revData.map((v, i) =>{
                                return(
                                    <tr key={v.id}>
                                        <td className='num'>{v.num}</td>
                                        <td className='reg'>{v.region}</td>
                                        <td className='tit'><NavLink to={`/eduSupport/${v.id}`} className='link'>{v.title}</NavLink></td>
                                        <td className={(v.progress === "종료") ? "pro end" : "pro"}>{v.progress}</td>
                                        <td className='key'>{v.keyword}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <PageNumber />
            </div>
        </IndexContainer>
    );
});

export default index;
