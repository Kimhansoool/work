import React, {memo} from 'react';
import styled from 'styled-components';

const NumberContainer = styled.div`
    width:300px;
    height: auto;
    margin:60px auto;

    .numberWrap{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .item{
            margin-left:5px;

            &:first-child{
                margin-left:0;
            }
            .link{
                display:flex;
                justify-content: center;
                align-items: center;
                width:36px;
                height:36px;
                border:1px solid #D9D9D9;
                font-size:16px;
                color:#333333;
                background-color: #fff;

                &.active{
                    border:0;
                    background-color: #333333;
                    color:#fff;
                }
            }
        }
    }
`;

const PageNumber = memo(() => {
    return (
        <NumberContainer>
            <ul className='numberWrap'>
                <li className='item'><a href='#' className='link'>«</a></li>
                <li className='item'><a href='#' className='link active'>1</a></li>
                <li className='item'><a href='#' className='link'>2</a></li>
                <li className='item'><a href='#' className='link'>3</a></li>
                <li className='item'><a href='#' className='link'>4</a></li>
                <li className='item'><a href='#' className='link'>5</a></li>
                <li className='item'><a href='#' className='link'>»</a></li>
            </ul>
        </NumberContainer>
    );
});

export default PageNumber;
