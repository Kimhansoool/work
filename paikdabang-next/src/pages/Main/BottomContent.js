import React, {memo} from 'react';
import styled from 'styled-components';
import MoreBtn from '../../components/MoreBtn';
import mq from '@/styles/MediaQuery';
import Link from "next/link";

const BottomContentContainer = styled.div`
    display: flex;
    width:100%;
    margin: 0 auto;
    margin-top:15px;
    

    ${mq.maxWidth('lg')`
        flex-wrap: wrap;
        flex-direction: column-reverse;
        margin:0;
    `}

    .leftSec{
        width:500px;
        margin-left:18%;

        ${mq.maxWidth('xxl')`
            margin-left:15px;
        `}

        ${mq.maxWidth('lg')`
            display:flex;
            flex-direction: row-reverse;
            width:100%;
            margin-left:0;
            justify-content: center;
            margin-top:20px;

        `}

        .contentBox{
            width:500px;
            height:292px;
            border:2px solid #071f60;
            margin-bottom:15px;
            padding:40px 50px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;

            ${mq.maxWidth('lg')`
                width:calc(46% - 10px);
                margin:10px;
                height:250px;
                padding:20px 30px
            `}


            .textWrap{
                width:100%;
                height:auto;
                
                .title{
                    font-size:40px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 800;
                    color:#071f60;
                    margin-bottom:10px;

                    ${mq.maxWidth('lg')`
                        font-size:30px;
                    `}

                    ${mq.maxWidth('md')`
                        font-size:24px;
                    `}
                    
                }

                p{
                    font-family: 'Noto Sans KR', sans-serif;
                    font-size:18px;

                    ${mq.maxWidth('lg')`
                        font-size:16px;
                    `}

                    ${mq.maxWidth('md')`
                        font-size:14px;
                    `}
                }
            }
            
            .storeBtn{
                display: flex;
                justify-content: center;
                align-items: center;
                width:50px;
                height:50px;
                background-color: #fff;
                border-radius: 50%;
                box-shadow: 3px 3px 10px #00000020;
                background-image: url("img/icon/store_icon.png");
                background-repeat:no-repeat ;
                background-position: center center;
                background-size: 50%;

                &:hover{
                    background-image:url("img/icon/btn-on.png");
                    background-size: 100%;
                    animation:opacity 1s;
                }

                    @keyframes opacity {
                        0% {
                            opacity: 0;
                        } 100% {
                            opacity: 1;
                        }
                    }

                img{
                    width:24px;
                    height:auto;
                }
            }

            .storeFindSubmit{
                position: relative;
                width:320px;

                ${mq.maxWidth('lg')`
                    width:88%;
                `}

                ${mq.maxWidth('md')`
                    input::placeholder{color:#fff;}
                `}

                .findStore{
                    position: relative;
                    width:100%;
                    height:50px;
                    border:2px solid #071f60;
                    padding:0 16px;
                    display:flex;
                    align-items:center;

                    ${mq.maxWidth('lg')`
                        height:40px;
                    `}
                }

                .submitBtn{
                    position: absolute;
                    top:50%;
                    right:10px;
                    border:0;
                    transform: translateY(-50%);
                    background-color:transparent;

                    img{
                        width:24px;
                        height:auto;

                        ${mq.maxWidth('lg')`
                            width:18px;
                        `}
                    }
                }
            }
            
            &.franchise{
                background-image:url('img/bottomContent1.png');
                background-position:bottom right;
                background-size: 45%;
                background-repeat:no-repeat;

                ${mq.maxWidth('lg')`
                    background-size: 35%;

                `}
            }  
        }
    }

    .rightSec{
        margin-left:15px;
        width: 100%;
        height:600px;
        background-image: url('/img/bottomContent2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        

        ${mq.maxWidth('xl')`
            position: relative;
        `}

        ${mq.maxWidth('lg')`
            width:100%;
            background-position:center right;
            margin:0;
        `}

        .SecInner{
            cursor: pointer;


            ${mq.maxWidth('xl')`
                margin-left:8%; 
                margin:60px 0;
            `}

            .textWrap{
                padding:50px 40px;

                ${mq.maxWidth('xl')`
                    padding:0;
                    margin-left:8%;
                `}

                ${mq.maxWidth('lg')`
                    margin-left:5%;
                    padding:0;
                `}

                .title{
                    width:350px;
                    font-size:50px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                    color:#ffffff;
                    margin-bottom:10px;

                    ${mq.maxWidth('xl')`
                        font-size:40px;
                    `}
                
                }

                .divider{
                    width:44px;
                    height:3px;
                    background-color:#ffffff;
                    margin:20px 0;

                    ${mq.maxWidth('xl')`
                        height:2px;
                    `}
                }

                p{
                    color:#ffffff;
                    width:180px;
                    font-size:18px;
                    font-weight: 600;
                    line-height: 1.5;
                    font-family: 'Noto Sans KR', sans-serif;
                    margin-bottom:210px;

                    ${mq.maxWidth('xl')`
                        display:none;
                    `}
                }
            }   
        }
    }
`;

const BottomContent = memo(() => {
  return (
    <BottomContentContainer>
        <section className='leftSec'>
            <div className='contentBox store'>
                <div className='textWrap'>
                    <h1 className='title'>STORE</h1>
                    <p>원하시는 지역의 매장을 검색해보세요!</p>
                </div>
                <form className='storeFindSubmit'>
                    <input type='text' placeholder='지역에 있는 매장을 찾아보세요!' className='findStore' />
                    <button type='submit' className='submitBtn'>
                        <img src='img/icon/search_icon.png' alt='searchIcon' />
                    </button>
                </form>
                
            </div>
            <div className='contentBox franchise'>
                <div className='textWrap'>
                    <h1 className='title'>FRANCHISE</h1>
                    <p>빽다방 창업 안내를 도와드리겠습니다.</p>
                </div>
                <Link href='#' className='storeBtn'></Link>
            </div>
        </section>
        <section className='rightSec'>
            <div className='SecInner'>
                <div className='textWrap'>
                    <h1 className='title'>TASTY<br />ICE CREAM / DESSERT</h1>
                    <div className='divider'></div>
                    <p>달콤한 아이스크림부터 든든한 브레드까지!</p>
                    <MoreBtn href='/menu/menu_dessert' />
                </div>
            </div>
        </section>
    </BottomContentContainer>
  );
});

export default BottomContent;
