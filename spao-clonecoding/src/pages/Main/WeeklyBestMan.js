import React, {memo, useCallback} from 'react';
import styled from 'styled-components';

import dataset from '../../dataset';

const HoverMenu = styled.div`
    position: absolute;
    text-align: left;
    bottom:-160px;
    right:0;
    width:360px;
    background-color: #fff;
    overflow: auto;
    box-sizing: border-box;
    border:1px solid #eeeeee;
    padding:6px 20px;
    height: 0;
    opacity: 0;

    ul{ 
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;

        li{
            border-bottom: 1px solid #0003;
            padding:14px 0;
            cursor: pointer;
            font-size:13px;
        }
    }

    &.active {
        opacity: 1;
        height: 160px;
    }
`;

const Number = styled.div`
    content: "";
    position: absolute;
    font-size:26px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    top:0;
    left:0;
    width:60px;
    height:60px;
    background-color: #e86434;
`;

const WeeklyBestMan = memo(() => {
    const {man} = dataset.content;

    const onInfoHover = useCallback((e) =>{
        e.preventDefault();
        const current = e.currentTarget;

        const currentHover = current.parentElement.querySelector('.HoverMenu');
        console.log(currentHover);

        currentHover.classList.toggle('active');
        
    },[]);

    const onWish = useCallback((e) =>{
        e.preventDefault();

        const current = e.currentTarget;

        const heart = current.parentElement.querySelector('.wish');
        console.log(heart);

        heart.classList.toggle('active');

        if(heart.classList.contains("active")){
            heart.style.backgroundImage = "url(img/icon/wishON.png)"
        } else{
            heart.style.backgroundImage = "url(img/icon/wish.png)"
        }
 
    }, []);

    return (
        <ul className='itemInner'>
            {man.map((v, i) =>{
                return(
                    <li key={v.id} className='item'>
                        <div className='imgWrap weeklyBest'>
                            <a href='#'><img src={v.img} className='productImg' alt='weeklyBest-img' /></a>
                            <img className='productInfo' onClick={onInfoHover} src='img/icon/hamburger-menu.png' alt='hamburger-menu' />
                            <HoverMenu className='HoverMenu'>
                                <ul className='hoverItemWrap'>
                                    {v.hoverInfo.map((j, k) =>{
                                        return(
                                            <li key={k}>{j.text}</li>
                                        );
                                    })}
                                </ul>
                            </HoverMenu>
                            <Number>{`${i + 1}`}</Number>
                       </div>
                        <div className='description'>
                            <div className='productName'>
                                <span><a href={v.url} className='title'>{v.title}</a></span>
                                <i className='wish' onClick={onWish}></i>
                            </div>
                            <div className='price'>
                                <span className='nowPrice'>{v.nowPrice}</span>
                                <span className='beforePrice'>{v.beforePrice}</span>
                                <span className='discountPercent'>{v.discountPercent}</span>
                            </div>
                            <div className='colorBox'>
                                {v.colorChip.map((j, k) => {
                                return (
                                    <span className='colorChip' key={k} style={{backgroundColor :`${j.hexCode}`}}></span>
                                );
                                })}
                            </div>
                            <div className='reviewBox'>
                                <span className='review'>리뷰{v.review}건</span>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
});

export default WeeklyBestMan;
