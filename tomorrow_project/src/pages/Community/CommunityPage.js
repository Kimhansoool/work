import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, useNavigate} from 'react-router-dom';

import Title from '../../components/TitleContainer';
import PageNumber from '../../components/PageNumber';
import Spinner from '../../components/Spinner';

import {useQueryString} from '../../hooks/useQueryString';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/CommunityListSlice';


const CommunityPageContainer = styled.div`
    color:#333333;

    .contentContainer{
        .contentWrap{
            max-width:1200px;
            height: auto;
            margin:0 auto 80px;

            .searchForm{
                margin-top:120px;
                display: flex;
                max-width:1200px;
                height:50px;

                .searchInput{
                    width:90%;
                    border-radius: 10px;
                    border:1px solid #d9d9d9;
                    padding-left:30px;
                    font-size:20px;
                }
                
                .searchBtn{
                    width:calc(10% - 10px);
                    margin-left:10px;
                    border-radius: 10px;
                    background-color: #959595;
                    border:0;
                    color:#fff;
                    cursor: pointer;
                }

            }

            .listTable{
                width:100%;
                text-align: center;
                margin-top:30px;

                thead{
                    height: 60px;
                    background-color: #f5f5f5;
                    border-top:2px solid #333333;
                    border-bottom:1px solid #B3B3B3;
                    line-height: 60px;

                    tr{
                        th{
                            font-weight: 600;
                            border-left:1px solid #B3B3B3;

                            &:first-child{
                                border-left:0;
                            }
                        }
                    }
                }

                tbody{
                    tr{
                        height: 60px;
                        border-bottom:1px solid #B3B3B3;
                        line-height: 60px;

                        td{
                            border-left:1px solid #B3B3B3;

                            &:nth-child(2){
                                padding-left:40px;
                                text-align: left;
                            }

                            &:first-child{
                                border-left:0;
                            }

                            .link:active{
                                /* font-weight: 600; */
                                color:#34964B;
                            }
                        }
                    }
                }
            }

            .writeBtn{
                width:100%;
                height: 50px;
                border-radius: 10px;
                border:0;
                background-color: #333333;
                color:#fff;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                cursor: pointer;
            }
        }
    }
`;

const CommunityPage = memo(() => {
    const {keyword} = useQueryString();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.CommunityListSlice);

    useEffect(() =>{
        dispatch(getList({
            keyword: keyword
        }));
    }, [keyword]);

    const onSearchSubmit = useCallback((e) =>{
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;

        let redirectUrl = keyword.value ? `/communityHome/?keyword=${keyword.value}` : '/communityHome';
        navigate(redirectUrl);
    }, [navigate]);

    return (
        <CommunityPageContainer>
            <Spinner loading={loading} />
            <Title title='커뮤니티' txt='여러분의 다양한 의견을 자유롭게 나눠보세요.' />
            <div className='contentContainer'>
                <div className='contentWrap'>
                    <form className='searchForm' onSubmit={onSearchSubmit}>
                        <input type='text' className='searchInput' name='keyword' placeholder='제목을 입력하여 검색하세요.' />
                        <button type='submit' className='searchBtn'>검색</button>
                    </form>
                    <table className='listTable'>
                        <colgroup>
                            <col style={{width:"8%"}}></col>
                            <col style={{width:"72%"}}></col>
                            <col style={{width:"15%"}}></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? (data.map((v, i) =>{
                                return(
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td><NavLink to={`/communityView/${v.id}`} className='link'>{v.title}</NavLink></td>
                                        <td>{v.registration}</td>
                                    </tr>
                                );
                            })) : (
                                <tr>
                                    <td colSpan='3' alicn='center'>
                                    검색 결과가 없습니다.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <NavLink to='/communityAdd' className='writeBtn'>글쓰기</NavLink>
                    <PageNumber />
                </div>
            </div>
        </CommunityPageContainer> 
    );
});

export default CommunityPage;
