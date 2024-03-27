import React, {memo, useCallback, useRef} from 'react';
import styled from 'styled-components';

import { NavLink, useNavigate } from 'react-router-dom';

const JoinContainer = styled.div`
    width:100%;

    .contentContainer{
        max-width:1200px;
        margin:0 auto;
        padding-top:190px;
        text-align: center;

        .logoImg{
            width:150px;
            height: auto;
            margin-bottom: 50px;
        }

        .contentWrap{
            width:100%;
            display: flex;
            justify-content: center;

            .loginContainer{
                width:450px;
                height: 270px;
                

                .loginWrap{
                    padding:40px 25px;
                    border:1px solid #d9d9d9;
                    border-radius: 10px;

                    .input{
                        width:100%;
                        height: 50px;
                        border:1px solid #d9d9d9;
                        background-color: #f9f9f9;
                        color:#959595;
                        border-radius: 2px;
                        margin-bottom:10px;
                        padding:0 10px;

                        &:focus{
                            outline:1px solid #34964B;
                        }
                    }

                    .submitBtn{
                        margin-top:20px;
                        width:100%;
                        height: 50px;
                        color:#fff;
                        background-color: #34964B;
                        border-radius: 2px;
                        border:0;
                        cursor: pointer;
                    }
                }

                .joinWrap{
                    margin-top:10px;
                    color:#959595;

                    span::after{
                        content:"|";
                        margin:0 5px;
                        color:inherit;
                    }

                    span{
                        .link{
                            color:inherit;
                        }
                    }

                    .pwSearch::after{
                        content:"";
                        margin-right:0;
                    }

                }
            }
        }
    }
`;

const Join = memo(() => {
    const idRef = useRef();
    const pwRef = useRef();
    const navigate = useNavigate();

    const onLogin = useCallback((e) =>{
        e.preventDefault();

        if(!idRef.current.value){
            window.confirm("아이디를 입력하세요.");
            return;
        }

        if(!pwRef.current.value){
            window.confirm("비밀번호를 입력하세요.");
            return;
        }

        window.confirm(`${idRef.current.value}님 안녕하세요!`);
        navigate('/');
    }, []);

    return (
        <JoinContainer>
            <div className='contentContainer'>
                <NavLink to='/'><img src='/img/logo.png' alt='내일응원 로고' className='logoImg' /></NavLink>
                <div className='contentWrap'>
                    <div className='loginContainer'>
                        <form className='loginWrap' onSubmit={onLogin}>
                            <input type='text' className='input inputId' ref={idRef} placeholder='아이디를 입력하세요' />
                            <input type='text' className='input inputPw' ref={pwRef} placeholder='비밀번호를 입력하세요' />
                            <button type='submit' className='submitBtn'>로그인하기</button>
                        </form>
                        <div className='joinWrap'>
                            <span className='join'><NavLink to='#!' className='link'>회원가입</NavLink></span>
                            <span className='idSearch'><NavLink to='#!' className='link'>아이디 찾기</NavLink></span>
                            <span className='pwSearch'><NavLink to='#!' className='link'>비밀번호 찾기</NavLink></span>
                        </div>
                    </div>
                </div>
            </div>
        </JoinContainer>
    );
});

export default Join;
