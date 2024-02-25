import React, {memo} from 'react';
import styled from 'styled-components';

const SnsContainer = styled.div`
    background-color: #333333;
    width:100%;
    height: 500px;
    color:#fff;

    .snsWrap{
        max-width: 1200px;
        margin:0 auto;
        display: flex;
        
        .snsInner{
            padding:30px 5px;

            .title{
                height: max-content;
                margin-bottom:30px;
                line-height: 1.6;

                .link{
                    font-size:28px;
                    color:#fff;
                    font-weight: 600;
                }
            }
        }

        

        .content{
            li{
                font-size:18px;
                color:#fff;
                margin-bottom:10px;

                &::before{
                    content: "·";
                    margin-right:5px;
                }
            }
        }
    }
`;

const Sns = memo(() => {
  return (
    <SnsContainer>
        <div className='snsWrap'>
            <div className='snsInner'>
                <h1 className='title'><a href='https://kimhs7858.tistory.com/' target='_blank' className='link'>티스토리 블로그 (https://kimhs7858.tistory.com/)</a></h1>
                <ol className='content'>
                    <li>개발 공부를 하면서 배운 내용들을 복습 차원으로 정리하여 업로드</li>
                    <li>다양한 예제 풀이 및 오답노트 정리용</li>
                </ol>
            </div>
            <div className='snsInner'>
                <h1 className='title'><a href='https://github.com/Kimhansoool' target='_blank' className='link'>깃허브 (https://github.com/Kimhansoool)</a></h1>
                <ol className='content'>
                    <li>포트폴리오 작업물 업로드</li>
                    <li>공부한 내용, 예제, 문제 업로드</li>
                </ol>
            </div>
        </div>
    </SnsContainer>
  );
});

export default Sns;
