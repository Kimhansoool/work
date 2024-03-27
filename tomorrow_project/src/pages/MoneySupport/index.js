import React, {memo, useState, useRef, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Title from '../../components/TitleContainer';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/MonSupContentSlice';

const IndexContainer = styled.div`
    .contentContainer{
        color:#333333;
        width:100%;
        
        .contentWrap{
            .popularWrap{
                margin:120px auto 100px;
                border-radius: 10px;
                max-width:1200px;
                height: auto;

                .title{
                    font-size:30px;
                    height: auto;
                    width:max-content;
                    margin: 0 auto;
                    font-weight: 600;
                }

                .popContent{
                    margin-top:50px;
                    display: flex;
                    width:100%;
                    height:300px;
                    border-radius: 10px;
                    border:1px solid #d9d9d9;
                    background-color: #ffffff;
                    box-shadow: 1px 1px 30px rgba(100, 100, 100, 0.1);

                    .imgWrap{
                        width:480px;
                        height: auto;
                        background-color: #d9d9d9;
                        border-radius: 10px 0 0 10px;
                        background-image: url('/img/monsup/money01.jpg');
                    }

                    .textWrap{
                        display: flex;
                        align-items: center;
                        padding-left:54px;

                        .textInner{
                            .tit{
                                font-size:26px;
                                font-weight: 600;
                                margin-bottom:16px;
                            }

                            .txt{
                                font-size:16px;
                                margin-bottom:6px;
                            }

                            .period{
                                color:#959595;
                                margin-bottom:28px;
                            }

                            .countdown{
                                width:350px;
                                height: 100px;
                                border: 1px solid #d9d9d9;
                                border-radius: 10px;

                                display: flex;
                                align-items: center;
                                justify-content: center;

                                font-size:50px;

                                .point{
                                    font-size:inherit;
                                    color:#34964b;
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
            }

            .contentListContainer{
                background-color:#F9F9F9 ;
                width:100%;

                .contentListWrap{
                    max-width: 1200px;
                    margin:0 auto;
                    padding-top:80px;

                    .total{
                        text-align: center;
                        font-size: 24px;
                        margin:90px 0 50px;

                        .point{
                            font-size:inherit;
                            color:#34964b;
                        }
                    }

                    .searchWrap{
                        /* margin-top:120px; */
                        border:1px solid #B3B3B3;
                        background-color: #ffffff;
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

                    .listWrap{
                        display: flex;
                        flex-wrap: wrap;

                        .listItem{
                            width:285px;
                            margin-left:20px;
                            border-radius:10px;
                            border:1px solid #D9D9D9;
                            height:330px;
                            margin-bottom:40px;
                            background-color: #ffffff;

                            &:first-child{margin-left:0;}
                            &:nth-child(5n){margin-left:0;}

                            .link{
                                display: block;

                                .imgWrap{
                                    background-color: #d9d9d9;
                                    height: 200px;
                                    border-radius: 10px 10px 0 0;

                                    .img{
                                        width:100%;
                                        object-fit: cover;
                                    }
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
            }
        }
    }
`;

const index = memo(() => {
    const [regionSearch, setRegionSearch] = useState('');
    const [titleSearch, setTitleSearch] = useState('');
    const [keywordSearch, setKeywordSearch] = useState('');
    const titleSearchRef = useRef();
    const keywordSearchRef = useRef();

    const [day, setDay] = useState(parseInt(336));
    const [hour, setHour] = useState(parseInt(1));

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.MonSupContentSlice);

    useEffect(() =>{
        dispatch(getList({
            regionSearch: regionSearch,
            titleSearch: titleSearch,
            keywordSearch, keywordSearch
        }))
    }, [regionSearch, titleSearch, keywordSearch]);

    const onRegionSearch = useCallback((e) =>{
        setRegionSearch(e.currentTarget.value);
    },[]);

    const onTitleSearch = useCallback((e) =>{
        setTitleSearch(titleSearchRef.current.value);
    }, []);

    const onKeywordSearch = useCallback((e) =>{
        setKeywordSearch(keywordSearchRef.current.value);
    }, []);

    useEffect(() =>{
        const countdown = setInterval(() =>{

            if(parseInt(hour) > 0){
                setHour(parseInt(hour) - 1);
            }
                if(parseInt(hour) === 0){
                    if(parseInt(day) === 0){
                        clearInterval(countdown);
                    } else{
                        setDay(parseInt(day) - 1);
                        // setHour(59);
                    }
                }
        }, 60000);
        return () => clearInterval(countdown);
    }, [day, hour]);
    

    return (
        <IndexContainer>
            <Title title='금전복지' txt='취업 준비생 여러분이 다양한 기술을 부담없이 배울 수 있도록 최선을 다합니다.' />
            <div className='contentContainer'>
                <div className='contentWrap'>
                    <div className='popularWrap'>
                        <h1 className='title'>가장 클릭수가 높은 정책</h1>
                        <NavLink href='#' className='popContent'>
                            <div className='imgWrap'></div>
                            <div className='textWrap'>
                                <div className='textInner'>
                                    <h3 className='tit'>청년월세 특별지원</h3>
                                    <p className='txt'>19세~34세 청년 대상 월 최대 20만원까지, 12개월 간 월세 지원</p>
                                    <p className='period'>신청기간: 2024-02-26 ~ 2025-02-25</p>
                                    <p className='countdown'>
                                        <span className='point'>{day < 10 ? `0${day}` : day }</span>일&nbsp;<span className='point'>{hour < 10 ? `0${hour}` : hour}</span>시간
                                        </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='contentListContainer'>
                        <div className='contentListWrap'>
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
                            <h1 className='total'>총 <span className='point'>{data?.length}</span>개의 정책이 있습니다.</h1>
                            <ul className='listWrap'>
                                {data && data.map((v, i) =>{
                                    return(
                                        <li className='listItem' key={v.id}>
                                            <NavLink to={`/monSupport/${v.id}`} className='link'>
                                                <div className='imgWrap' style={{backgroundImage:`url(${v.img})`}}>
                                                </div>
                                                <div className='textWrap'>
                                                    <h3 className='title'>{v.title}</h3>
                                                    <p className='subTit'>{v.subtit}</p>
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
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </IndexContainer>
    );
});

export default index;
