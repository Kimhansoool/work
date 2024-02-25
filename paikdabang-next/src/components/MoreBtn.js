import React, {memo} from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import mq from '@/styles/MediaQuery';

const MoreBtnContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 3px 3px 10px #00000020;
    background-image: url("img/icon/view_icon.png");
    background-repeat: no-repeat;
    background-position: center center;

    &:hover{
      background-image:url("img/icon/btn-on.png");
      animation:rotate 0.2s;
    }

    @keyframes rotate {
      0% {
        transform: rotate(-360deg)
      } 100% {
        transform: rotate(0deg)
      }
    }

    div{
      width:18px;
      height:18px;
    }

    ${mq.maxWidth('xl')`
      position: absolute;
      bottom:50px;
      right:50px;
    `}
`;

const MoreBtn = memo(({href}) => {
  return (
    <MoreBtnContainer href={href}>
      <div></div>
    </MoreBtnContainer>
  );
});

export default MoreBtn;
