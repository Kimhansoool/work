import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 색상 변수 참조
import * as colors from './colors';
import mq from './MediaQuery';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *:not(i){
      font-family: 'Noto Sans KR' !important;
      box-sizing: border-box;
      font-size:16px;
  }

  .ql-snow .ql-editor * {
    font-weight: revert !important;
    font-style: revert !important;
  }

  .ql-snow .ql-editor img {
    max-width:100%;
  }

  body{
    padding:0;
    margin:0;
  }

  a{
    text-decoration: none;
    color: ${colors.BLACK};
  }

  .title{
    width:100%;
    height:100%;
    display:flex;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    .hello{
      margin: auto;

      color:${colors.WHITE};
      text-align:center;
      text-transform: uppercase;
      padding:30px 50px;

      ${mq.maxWidth('md')`
        padding:20px 30px;
      `}

      h1{
        font-size:36px;
        font-weight:600;
        white-space:nowrap;
        margin-bottom:10px;

        ${mq.maxWidth('md')`
          font-size:26px;
        `}
      }

      p{
        font-size:20px;
        font-weight:300;

        ${mq.maxWidth('md')`
          font-size:16px;
        `}
      }
    }
  }
`;

export default GlobalStyles;
