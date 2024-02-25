import React, {memo} from 'react';
import styled from 'styled-components';
import MoreBtn from '../../components/MoreBtn';
import dataset from '../../dataset';

const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    .menuWrap{
        width:100%;
        height:auto;
        overflow: hidden;

        &.w100{
            width:100%;

            .menuInner{
                .textWrap{
                    
                }
            }

        }

        &.w60{
            width:60%;

            .menuInner{

                .textWrap{
                    left:31%;

                    .title{
                        color:#071f60;
                    }

                    .divider{
                        background-color:#071f60;
                    }
                }
            }

            
        }

        &.w40{
            width:40%;

            .menuInner{

                .textWrap{

                    .title{
                        color:#f1ae1d;
                        width:340px;
                    }

                    .divider{
                        background-color:#f1ae1d;
                    }

                    p{
                        width:350px;
                    }
                }
            }
        }


        &:hover img{
            transform: scale(1.02, 1.02);
            transition: all 1s ease-out;
        }
        

        .menuInner{
            display: block;
            width:100%;
            height:100%;
            position: relative;

            .textWrap{
                position: absolute;
                top:14%;
                left:18.5%;
                /* margin-left:350px; */
                z-index: 999999999;

                .title{
                    width:200px;
                    font-size:46px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                    color:#6b4d30;
                }

                .divider{
                    width:40px;
                    height:3px;
                    background-color:#6b4d30;
                    margin:16px 0;
                }

                p{
                    width:230px;
                    line-height: 1.4;
                    margin-top:20px;
                    font-size:18px;
                    font-family: 'Noto Sans KR', sans-serif;
                    font-weight: 600;
                    margin-bottom:110px;
                }
            }

            img{
                object-fit: cover;
                width:100%;
                height:100%;
            }
        }
    }
`;

const Menu = memo(() => {
    const {menu} = dataset;
  return (
    <MenuContainer>
        {menu.map((v, i) =>{
            return(
                <section className={`menuWrap w${v.state}`} key={i}>
                    <a href='#' className='menuInner'>
                        <div className='textWrap'>
                            <h1 className='title'>{v.title}</h1>
                            <div className='divider'></div>
                            <p>{v.text}</p>
                            <MoreBtn href='#' />
                        </div>
                        <img src={v.img} alt='CoffeeMenuBanner' />
                    </a>
                </section>
            );
        })}

      {/* <section className='menuWrap 100w'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>FRESH COFFEE</h1>
                <div className='divider'></div>
                <p>신선한 뉴크롭 원두를 사용하여 추출한 커피메뉴!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec1.jpg' alt='CoffeeMenuBanner' />
        </a>
      </section>
    <section className='menuWrap w60'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>VARIOUS BEVERAGE</h1>
                <div className='divider'></div>
                <p>에이드, 티, 주스 등 취향대로 골라 먹는 즐거움!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec2.jpg' alt='CoffeeMenuBanner' />
        </a>
    </section>
    <section className='menuWrap w40'>
        <a href='#' className='menuInner'>
            <div className='textWrap'>
                <h1 className='title'>SWEET PAIK'S CCINO</h1>
                <div className='divider'></div>
                <p>달콤 시원한 빽다방 시그니처 메뉴!</p>
                <MoreBtn href='#' />
            </div>
            <img src='/img/menu_sec3.jpg' alt='CoffeeMenuBanner' />
        </a>
    </section> */}
      
    </MenuContainer>
  );
});

export default Menu;
