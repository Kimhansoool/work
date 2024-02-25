import React, {memo, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CategorySlice';
import { titleList } from '@/slices/TitleContainerSlice';
import Link from 'next/link';
import mq from '@/styles/MediaQuery';

const PaiksMenu = styled.div`
    width:100%;
    height:100%;
    margin-top:120px;
    /* background-color: #00f5; */
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;

    .titleContainer{
        height:500px;
        padding-top:150px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        ${mq.maxWidth('md')`
            padding-top:70px;
        `}

        .titleInner{
            width:100%;
            height:150px;

            .mainTitle{
                font-size:40px;
                font-weight:600;
                margin-bottom: 30px;
            }

            .divider{
                width:50px;
                border: 1px solid #000;
            }

            .mainSubTitle{
                margin-top:30px;
                font-size:20px;
            }
        }

        .mainTab{
            margin:0 auto;
            max-width:1000px;
            display: flex;
            margin-top:100px;
            padding:0 20px;

            ${mq.maxWidth('md')`
                flex-wrap:wrap;
                margin-top:0;
            `}

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                width:20%;
                height:40px;
                background-color: #fff;
                border: 1px solid #aaaaaa90;
                border-left:0;

                ${mq.maxWidth('xl')`
                    font-size:14px;
                `}

                ${mq.maxWidth('md')`
                    width:100%;
                `}

                &:first-child{
                    border-left:1px solid #aaaaaa90;
                }

                &.on{
                    background-color: #ffe600;
                        
                    }
                
                .titleLink{
                    width:100%;
                    /* cursor: pointer; */
                    display: block;
                    padding:20px 20px;
                    font-size:16px;

                    ${mq.maxWidth('xl')`
                        font-size:14px;
                    `}

                    ${mq.maxWidth('md')`
                        font-size:16px;
                    `}
                }
            }
        }
    }

    .totalMenuContainer{
        max-width:1200px;
        height: 100%;
        /* background-color: #f0f5; */
        margin:100px auto;
        display: flex;
        flex-wrap: wrap;
        padding:0 40px;

        .MenuWrap{
            width:25%;
            height:auto;
            padding-bottom:40px;
            border:1px solid #aaaaaa90;
            border-left:0;
            position: relative;
            margin-bottom: 20px;

            ${mq.maxWidth('xl')`
                width:50%;
                border-left: 1px solid #aaaaaa90;

                &:nth-child(2n){
                    border-left:0;
                }
            `}

            .MenuInner{

                img{
                    width:90%;
                }

                .MenuTitle{
                    font-size:16px;
                }
            }

            .on{
                position: absolute;
                top:0;
                left:0;
                background-color: rgba(255, 230, 0, 0.8);
                width:calc(100% - 20px);
                height:calc(100% - 20px);
                margin:10px;
                text-align: left;
                padding:30px 25px;
                //display: none;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;

                .onTitleWrap{
                    height:130px;
                    .onTitle{
                        font-size:24px;
                        font-weight: 900;
                        line-height:1.3;
                    }

                    .onEngTitle{
                        font-family: 'Montserrat', sans-serif;
                        margin-top:5px;
                        color:#071F60;
                    }

                    .divider{
                        width:30px;
                        margin:10px 0;
                        border: 1px solid #071F60;
                    }

                    .desc{
                        font-size:14px;
                        line-height: 1.6;
                    }
                }

                .onDescription{
                    margin-top:60px;

                    ${mq.maxWidth('xl')`
                        margin-top:230px;
                    `}

                    ${mq.maxWidth('lg')`
                        margin-top:150px;
                    `}

                    ${mq.maxWidth('md')`
                        margin-top:70px;
                    `}

                    ${mq.maxWidth('sm')`
                        margin-top:50px;
                    `}

                    p{
                        font-size:14px;
                        margin-bottom:8px;
                        font-weight:600;
                    }

                    span{
                        font-size:10px;
                    }
                    
                    .descContent{
                        border-top:1px solid #000;
                        border-bottom:1px solid #000;
                        display: flex;
                        flex-wrap: wrap;
                        height:100%;
                        width:100%;
                        padding:4px 0;

                        li{
                            display: block;
                            border-right:1px solid #000;
                            font-size:12px;
                            width:50%;
                            padding:6px 5px;
                            display: flex;
                            justify-content: space-between;
                            font-weight:600;

                            &:nth-child(2n){
                                border-right:0;
                            }
                        }
                    }
                }
            }

            &:first-child{
                border-left: 1px solid #aaaaaa90;
            }

            &:nth-child(5n){
                border-left: 1px solid #aaaaaa90;
            }

            
        }
    }
`;

const Category = memo(() => {
    const [countIndex, setCountIndex] = useState(0);

    const router = useRouter();
    const {category} = router.query;
    console.log(category);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.CategorySlice);
    const {data: data2, loading: loading2, error: error2} = useSelector((state) =>state.TitleContainerSlice);

    useEffect(() =>{
        if (category) {
            dispatch(getList({category: category}));
            dispatch(titleList({category: category}));
        }
    }, [category]);

    // const onTabClick = useCallback((e) =>{
    //     const current = e.currentTarget;
    //     console.log(current);
    //     const TabLi = document.querySelectorAll('.Tabinner');

    //     TabLi.forEach((v, i) =>{
    //         v.classList.remove("on");
    //     });
    //     current.classList.add("on");

    // }, []);

    const handleOnClick = (e, k) =>{
        const arr = [];
        arr.push(k);

        setCountIndex(k);
        console.log(e.currentTarget);
        window.localStorage.setItem("current", JSON.stringify(arr));
    };

    const onInfoClick = useCallback((e) =>{
        const current = e.currentTarget;
        const on = document.querySelectorAll('.MenuWrap .on');
        console.log(on);
        
        current.style.opacity = 1 - current.style.opacity;
    }, []);

    return (
        <PaiksMenu>
            {data2 && data2.map((v, i) =>{
                return(
                    <div className='titleContainer' key={i} style={{backgroundImage: `url(${v.bgImage})`}}>
                        <div className='titleInner'>
                            <h3 className='mainTitle'>{v.title}</h3>
                            <hr className='divider' />
                            <p className='mainSubTitle'>{v.subTitle}</p>
                        </div>
                        <ul className='mainTab'>
                        {v.tab.map((j, k) =>{
                            return(
                                <li className={`Tabinner ${countIndex === k && 'on'}`} onClick={e => handleOnClick(e, k)} key={k}>
                                    <Link href={j.url} className='titleLink'>{j.title}</Link>
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                );
            })}
            
            {/* <div className='titleContainer' style={{backgroundImage: "url(/img/menu_sec_coffeeBg.jpg)"}}>
                <div className='titleInner'>
                    <h3 className='mainTitle'>커피</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>뉴 크롭 원두를 사용하여 더욱더 신선한 커피 메뉴를 만나보세요.</p>
                </div>
                <ul className='mainTab'>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_new' className='titleLink'>신메뉴</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_coffee' className='titleLink'>커피</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_drink' className='titleLink'>음료</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_dessert' className='titleLink'>아이스크림/디저트</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_ccino' className='titleLink'>빽스치노</Link></li>
                </ul>
            </div> */}
            {/* <div>
                <button type='button'>바로가기</button>
                <button type='button'>메인</button>
            </div> */}
            <ul className='totalMenuContainer'>
                {data && data.map((v, i) =>{
                    return(
                        <li key={v.id} className='MenuWrap'>
                            <div className='on' onClick={onInfoClick}>
                                <div className='onTitleWrap'>
                                    <h3 className='onTitle'>{v.name_kor}</h3>
                                    <h5 className='onEngTitle'>{v.name_eng}</h5>
                                    <hr className='divider' />
                                    <p className='desc'>{v.desc}</p>
                                </div>
                                <div className='onDescription'>
                                    <p>※ 1회 제공량 기준: {v.info.standard}</p>
                                    <ul className='descContent'>
                                        <li>
                                            <div>카페인(mg)</div>
                                            <div>{v.info.caffeine}</div>
                                        </li>
                                        <li>
                                            <div>칼로리 (kcal)</div>
                                            <div>{v.info.calorie}</div>
                                        </li>
                                        <li>
                                            <div>나트륨 (mg)</div>
                                            <div>{v.info.sodium}</div>
                                        </li>
                                        <li>
                                            <div>당류 (g)</div>
                                            <div>{v.info.sugars}</div>
                                        </li>
                                        <li>
                                            <div>포화지방 (g)</div>
                                            <div>{v.info.saturatedFat}</div>
                                        </li>
                                        <li>
                                            <div>단백질(g)</div>
                                            <div>{v.info.protein}</div>
                                        </li>
                                    </ul>
                                    <span>(매장 상황에 따라 판매하지 않을 수 있습니다.)</span>
                                </div>
                            </div>
                            <div className='MenuInner'>
                                <img src={v.img} />
                                <p className='MenuTitle'>{v.name_kor}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* <ul className='totalMenuContainer'>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee01.png' />
                    <p className='MenuTitle'>더블에스프레소</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee02.png' />
                    <p className='MenuTitle'>아메리카노(HOT)</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee03.png' />
                    <p className='MenuTitle'>아메리카노(ICED)</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee04.png' />
                    <p className='MenuTitle'>원조커피(HOT)</p>
                </li>
            </ul> */}
            {/* {data &&
                <p>{JSON.stringify(data)}</p>
            } */}
            
        </PaiksMenu>
    );
});

export default Category;
