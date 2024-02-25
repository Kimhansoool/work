import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
// import {Link, Routes, Route} from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const HeaderContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    z-index: 99999999;
    background-color: #111111;
    width:100%;
    height:60px;

    .headerInner{
        max-width: 1200px;
        height:100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
            width:146px;
            color:#fff;
            font-weight:900;
            font-size:24px;

            .point{
                font-size:24px;
                color:#F9A931;
            }
        }

        .navContainer{
            width:267px;
            display: flex;

            .navItem{
                margin-left:22px;
               

                &:first-child{margin-left:0;}

                .link{
                    font-weight: 600;
                    font-size:18px;
                    color:#fff;

                    /* &.active{
                        color:#F9A931;
                    } */
                }
            }
        }
    }
`;

const Header = memo(() => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleSetActive = (to) => {
        console.log(to);
    };

  return (
    <HeaderContainer>
        <nav className='headerInner'>
            <h3 className='logo'>KIMHANS<span className='point'>O</span>L</h3>
            <ul className='navContainer'>
                <li className='navItem'><Link to='/' className='link' onClick={scrollToTop}>MAIN</Link></li>
                <li className='navItem'><Link to='introduce' className='link' spy={true} smooth={true}>ABOUT</Link></li>
                <li className='navItem'><Link to='portfolio' className='link' spy={true} smooth={true}>WORK</Link></li>
                <li className='navItem'><Link to='sns' className='link' spy={true} smooth={true}>SNS</Link></li>
            </ul>
        </nav>
    </HeaderContainer>
  );
});

export default Header;
