import React, {memo} from 'react';
import styled from 'styled-components';
import MoreBtn from '../../components/MoreBtn';

const BottomContentContainer = styled.div`
    display: flex;
    /* background-color: #2a9d8f; */
    max-width:1200px;
    margin: 0 auto;
    margin-top:15px;

    .leftSec{
        .contentBox{
            width:500px;
            height:292.5px;
            border:2px solid #071f60;
            margin-bottom:15px;
            padding:40px 50px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;


            .textWrap{
                width:100%;
                height:auto;
                
                .title{
                    font-size:40px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 800;
                    color:#071f60;
                    margin-bottom:10px;
                }

                p{
                    font-family: 'Noto Sans KR', sans-serif;
                    font-size:18px;
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
                background-color: #00f;

                .findStore{
                    position: relative;
                    width:320px;
                    height:50px;
                    border:2px solid #071f60;
                    padding:0 16px;
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
                    }
                }
            }
            
            &.franchise{
                background-image:url('img/bottomContent1.png');
                background-position:bottom right;
                background-size: 45%;
                background-repeat:no-repeat;
            }
            
        }
    }

    .rightSec{
        position: relative;
        /* width:2000px; */
        /* background-color: #f7e1d7; */
        margin-left:15px;

        img{

        }

        .SecInner{
            position: absolute;
            z-index: 9999999;
            top:10%;
            left:5%;

            .title{
                width:350px;
                font-size:50px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color:#ffffff;
                margin-bottom:10px;
            }

            .divider{
                width:44px;
                height:2px;
                background-color:#ffffff;
                margin:20px 0;
            }

            p{
                color:#ffffff;
                width:180px;
                font-size:18px;
                font-weight: 600;
                line-height: 1.5;
                font-family: 'Noto Sans KR', sans-serif;
                margin-bottom:210px;
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
                <a href='#' className='storeBtn'></a>
            </div>
        </section>
        <section className='rightSec'>
            <a href='#' className='SecInner'>
                <div className='textWrap'>
                    <h1 className='title'>TASTY<br />ICE CREAM / DESSERT</h1>
                    <div className='divider'></div>
                    <p>달콤한 아이스크림부터 든든한 브레드까지!</p>
                    <MoreBtn href='#' />
                </div>
            </a>
            <img src='img/bottomContent2.jpg' alt='DessertMenuBanner' />
        </section>
    </BottomContentContainer>
  );
});

export default BottomContent;
