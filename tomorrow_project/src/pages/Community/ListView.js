import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components';

import Spinner from '../../components/Spinner';

import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getItem } from '../../slices/CommunityListSlice';

const ListViewContainer = styled.div`
    .contentContainer{
        max-width:1200px;
        margin:120px auto 80px;

        .contentWrap{
            width:100%;
            height:auto;
            

            .contentInner{
                border-top:2px solid #333333;
                border-bottom:1px solid #B3B3B3;

                .titWrap{
                    border-top:2px solid #333333;
                    height: 80px;
                    width:100%;
                    padding:0 20px;
                    display: flex;
                    align-items: center;

                    .title{
                        height: auto;
                        font-size:22px;
                        font-weight: 500;
                    }

                    .registration{
                        width: 150px;
                        text-align: right;
                        color:#959595;

                    }
                }

                .content{
                    padding:50px 20px 80px;
                    width:100%;
                    height: auto;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }
            }
            
            .btnWrap{
                margin-top:60px;
                display:flex ;
                justify-content: center;
                
                .btn{
                    margin-left:10px;
                    width:150px;
                    height: 48px;
                    border:0;
                    text-align: center;
                    color: #fff;
                    background-color: #959595;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &:first-child{margin-left:0;}

                    &.list{background-color:#34964B;}
                    &.edit{background-color:#0F7CDF;}
                }
            }
        }
    }
`;

const ListView = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.CommunityListSlice);
    const {id} = useParams();
    // console.log(id);
    const navigate = useNavigate();
    
    useEffect(() =>{
        dispatch(getItem({id: id}));
        // console.log(data);
    }, []);
    console.log(id);

    /** 삭제 이벤트 */
    const onDeleteItem = useCallback((e) =>{
        e.preventDefault();

        if(window.confirm("정말 삭제하시겠습니까?")){
            dispatch(deleteItem({id: id}));
        }
        navigate('/communityHome');
    }, []);

    const onEditItem = useCallback((e) =>{
        e.preventDefault();
        navigate(`/communityEdit/${id}`);
    }, []);
    

    return (
        <ListViewContainer>
            <Spinner loading={loading} />
            <div className='contentContainer'>
                {data && (
                    <form className='contentWrap'>
                        <div className='contentInner ql-snow'>
                            <div className='titWrap'>
                                <h1 className='title'>{data.title}</h1>
                                <span className='registration'>{data.registration} 등록</span>
                            </div>
                            
                            <hr className='divider' />
                            <p className='content ql-editor' dangerouslySetInnerHTML={{__html:data.content}} />
                        </div>
                        <div className='btnWrap'>
                            <NavLink to='/communityHome'className='btn list'>목록</NavLink>
                            <button type='button' className='btn edit' onClick={onEditItem}>수정</button>
                            <button type='button' data-id={data.id} className='btn delete' onClick={onDeleteItem}>삭제</button>
                        </div>
                    </form>
                )}
            </div>
        </ListViewContainer>
    );
});

export default ListView;
