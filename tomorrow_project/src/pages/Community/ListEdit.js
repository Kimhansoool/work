import React, {memo, useRef, useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import ReactQuill from 'react-quill';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import{ getItem, putItem } from '../../slices/CommunityListSlice';

const LIstEditContainer = styled.div`
    background-color:#F9F9F9;
    width:100%;
    height: auto;

    .contentContainer{
        max-width: 1200px;
        height: auto;
        margin:0 auto;
        padding:120px 0 80px;

        .contentWrap{
            .contentForm{

                .title{
                    height: 60px;
                    margin-bottom:20px;
                    font-size:24px;
                    padding:0 20px;
                    border:1px solid #cccccc;

                    &:focus{
                        border:1px solid #cccccc;
                        outline: #cccccc;
                    }
                }
                .qlContent{
                    background-color: #ffffff;
                    white-space: pre-wrap;
                }
            }
        }

        .btnWrap{
            margin-top:60px;
            display: flex;
            justify-content: center;

            .btn{
                display: flex;
                width:150px;
                height: 48px;
                align-items: center;
                justify-content: center;
                color:#ffffff;
                border:0;
                background-color:#959595;
                margin-left:10px;
                cursor: pointer;

                &:first-child{margin-left:0;}

                &.edit{background-color:#0F7CDF;}
            }
        }
    }
`;

const LIstEdit = memo(() => {
    const [contents, setContents] = useState('');
    const [title, setTitle] = useState('');

    const now = dayjs();;
    console.log(now.format('YYYY-MM-DD'));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, loading, error} = useSelector((state) => state.CommunityListSlice);
    const { id } = useParams();

    useEffect(() =>{
        dispatch(getItem({id: id}));
      }, [])

    useEffect(() =>{
        if(data){
            setTitle(data.title);
            setContents(data.content);
        }
    }, [data]);

    /** form태그의 submit버튼이 눌러졌을 때 */
    const onItemSubmit = (e) =>{
        e.preventDefault();
        // const current = e.currentTarget;
        console.log(contents, title);

        dispatch(putItem({
            id: id,
            title: title,
            content: contents,
            registration: now.format('YYYY-MM-DD')
        })).then((result) =>{
            // console.log(result);
            navigate(`/communityView/${id}`);
        })
    };


    return (
        <LIstEditContainer>
            <div className='contentContainer'>
                <div className='contentWrap'>
                    <div className='contentForm'>
                        <input className='title' placeholder='제목을 입력하세요' name='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                        <input type='hidden' name='id' defaultValue={data?.id} />
                        <ReactQuill
                        className='qlContent'
                        value={contents}
                        onChange={setContents}
                        placeholder="내용을 입력하세요."
                        />
                        <div className='btnWrap'>
                            <button type='button' className='btn edit' onClick={onItemSubmit}>올리기</button>
                        </div>
                    </div>
                </div>
            </div>
        </LIstEditContainer>
    );
});

export default LIstEdit;
