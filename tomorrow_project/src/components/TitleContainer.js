import React, {memo} from 'react';
import styled from 'styled-components';

const TitleContainerS = styled.div`
    width:100%;
    height:350px;
    background-color: #F9F9F9;
    text-align: center;
    padding-top:110px;
    color:#333;

    .title{
        display: block;
        font-size:40px;
        font-weight: 600;
        height: auto;
        margin-bottom:20px;
    }

    .txt{
        font-size:20px;
    }
`;

const TitleContainer = memo((props) => {
  return (
    <TitleContainerS>
        <h1 className='title'>{props.title}</h1>
        <p className='txt'>{props.txt}</p>
    </TitleContainerS>
  );
});

export default TitleContainer;
