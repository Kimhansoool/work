import React, {memo} from 'react';
import styled from 'styled-components';
import dataset from '../../dataset';

const PortfolioContainer = styled.div`
    background-color: #333333;
    color:#fff !important;
    width:100%;
    padding:150px 0;
    height: 100vh;

    .contentWrap{
        max-width:1200px;
        margin:0 auto;

        .contentInner{
            display: flex;
            flex-wrap: wrap;

            .item{
                width:590px;
                height:350px;
                margin-right:10px;
                margin-bottom:60px;
                position: relative;

                &:nth-child(2n){
                    margin-right:0;
                }

                    &.active{
                        .black{
                            display: block;
                        }
                    }

                    img{
                        width:100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .black{
                        position: absolute;
                        width:95%;
                        height:90%;
                        top:50%;
                        left:50%;
                        transform: translate(-50%, -50%);
                        background-color: rgba(255,255,255,0.9);
                        display: none;
                        padding:40px;

                        h2{
                            color:#000;
                            font-size:28px;
                            font-weight: 600;
                        }

                        ul{
                            margin-top:30px;
                            color:#000;
                            
                            li{
                                font-size:20px;
                                margin-bottom:10px;

                                span{
                                    font-size:20px;
                                    font-weight: 600;

                                    &::before{
                                        content: "-";
                                        display: inline-block;
                                        margin-right:5px;
                                    }
                                }

                                &:last-child{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    /* padding:20px 25px; */
                                    height: 60px;
                                    background-color: #333;
                                    margin-top:25px;
                                    border-radius: 50px;
                                    cursor: pointer;
                                    
                                    a{
                                        color:#ffffff;
                                        font-size:20px;
                                        padding:100px;
                                    }
                                }
                            }
                        }
                    }

                p{
                    margin-top:10px;
                    font-size:18px;
                    color:#ffffff;
                }
            }
        }
    }
`;

const Portfolio = memo(() => {
    const {portfolio} = dataset;

    return (
        <PortfolioContainer>
            <div className='contentWrap'>
                <ul className='contentInner'>
                    {portfolio && portfolio.map((v, i) =>{
                        return(
                            <li className='item active' key={v.id}>
                                <div className='black'>
                                    <h2>{v.title}</h2>
                                    <ul>
                                        <li><span>사용 언어:</span> {v.useLangEng}</li>
                                        <li><span>작업 기간:</span> {v.period}</li>
                                        <li><span>기여도:</span> {v.contributon}%</li>
                                        <li><span>반응형 지원:</span> {(v.responsive === true) ? ("지원함") : ("지원안함")}</li>
                                        <li><a href={v.url} target='_blank'>작업물 보러가기</a></li>
                                    </ul>
                                </div>
                                <img src={v.titImg} />
                                <p>{v.title} [사용언어: {v.useLangEng}]</p>
                            </li>
                        );
                        
                    })}
                </ul>
            </div>
        </PortfolioContainer>
    );
});

export default Portfolio;
