import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import dataset from '../../dataset';

const IntroduceContainer = styled.div`
    color:#fff !important;
    background-color: #333;
    width:100%;
    height: 100vh;
    padding-top:150px;

    .contentWrap{
        max-width: 1200px;
        margin:0 auto;

        .title{
            font-size:28px;
            height:max-content;

            .point{
                font-size:28px;
                font-weight: 800;
            }
        }

        .hashTagWrap{
            margin-top:40px;

            .hashTagInner{
                display: flex;

                .tagItem{
                    font-size:18px;
                    margin-left:8px;
                    font-weight: 300;

                    &:first-child{margin-left:0;}

                    padding:15px 22px;
                    background-color: #F9A93130;
                    border:1px solid #FFC876;
                    border-radius: 30px;
                }
            }
        }

        .introduceWrap{
            position: relative;
            margin-top:50px;

            .title{
                font-size:18px;
                cursor: pointer;
            }

            .introduceHidden{
                max-height:0px;
                overflow: hidden;
                transition: max-height 180ms ease-out;

                position: absolute;
                top:0;
                left:0;
                margin-top:30px;
                width:1200px;
                background-color: #464646;
                box-shadow: 1px 1px 20px #11111180;
                border-radius: 10px;

                .hiddenWrap{
                    .hiddenItem{
                        padding:0 30px;
                        margin:34px 0;
                        h4{
                            font-size:22px;
                        }

                        p{
                            margin-top:10px;
                            font-size:18px;
                            line-height: 1.6;
                            font-weight: 300;
                        }
                    }
                }
            }

            .skillWrap{

                .frontendSkill{
                    .title{
                        font-size:28px;
                        margin-top:50px;
                    }

                    .skillInner{
                        margin-top:20px;
                        width:1100px;
                        height: 180px;
                        border:1px solid #ffffff60;
                        border-radius: 10px;
                        padding:34px 40px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;

                        .skillItem{
                            margin-right:60px;
                            text-align: center;
                            font-weight: 600;

                            h4{
                                font-size:24px;
                                margin-bottom:8px;
                            }

                            p{
                                font-size:60px;
                                color:#F9A931;
                                font-weight: 900;
                                letter-spacing: -1px;
                            }

                            &:last-child{margin-right:0;}
                        }
                    }
                }

                .etcSkill{
                    .title{
                        font-size:28px;
                        margin-top:50px;
                    }

                    .skillInner{
                        margin-top:20px;
                        width:1100px;
                        height: 80px;
                        border:1px solid #ffffff60;
                        border-radius: 10px;
                        padding:34px 40px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;

                        .etcSkill{
                            font-size: 24px;
                            font-weight: 600;
                        }
                    }
                }
            }

            .experienceWrap{
                margin-top:50px;

                .title{
                    font-size:28px;
                }

                .experienceInner{
                    margin-top:20px;

                    .exItem{
                        display: flex;
                        align-items: center;
                        margin-top:16px;

                        &:first-child{margin-top:0;}

                        p{
                            font-size:18px;

                            strong{
                                font-size:inherit;
                                font-weight: 600;

                                &::after{
                                    content: "|";
                                    margin:0 5px;
                                    font-weight: inherit;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Introduce = memo(() => {

    const onHiddenOver = useCallback((e) =>{
        const current = e.currentTarget;
        current.innerHTML = "자기소개 더보기 ▲";
        const on = document.querySelector('.introduceHidden');
        console.log(on);

        on.style.maxHeight = on.scrollHeight + 'px';
    }, []);

    const onHiddenOut = useCallback((e) =>{
        const current = e.currentTarget;
        current.innerHTML = "자기소개 더보기 ▼ (마우스를 올려보세요)";
        const on = document.querySelector('.introduceHidden');
        console.log(on);

        on.style.maxHeight = '0px';
    }, []);

    const {seeMore} = dataset;
    const {introduce} = dataset;
    // console.log(introduce.hashTag);

    return (
        <IntroduceContainer>
            <div className='contentWrap'>
                <h1 className='title'>안녕하세요.&nbsp;<span className='point'>다재다능한</span>&nbsp;프론트엔드 개발자 김한솔입니다.</h1>
                <div className='hashTagWrap'>
                    <ul className='hashTagInner'>
                        {introduce.map((v, i) =>{
                            return(
                                (v.hashTag.length > 0) && (v.hashTag.map((j ,k) =>{
                                    return(
                                        <li key={k} className='tagItem'>{j.title}</li>
                                    );
                                }))
                            );
                        })}
                    </ul>
                </div>
                <div className='introduceWrap'>
                    <p className='title' onMouseOver={onHiddenOver} onMouseOut={onHiddenOut}>자기소개 더보기 ▼ (마우스를 올려보세요)</p>
                    <div className='introduceHidden'>
                        <ul className='hiddenWrap'>
                            {seeMore && seeMore.map((v, i) =>{
                                return(
                                    <li key={v.id} className='hiddenItem'>
                                        <h4>{v.title}</h4>
                                        <p>{v.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='skillWrap'>
                        <div className='frontendSkill'>
                            <h1 className='title'>저는 이런 툴을 다룰 수 있어요. (Frontend Skill)</h1>
                            <ul className='skillInner'>
                                {introduce && introduce.map((v, i) =>{
                                    return(
                                        (v.frontendSkill.length > 0 && (
                                            v.frontendSkill.map((j, k) =>{
                                                return(
                                                    <li className='skillItem' key={k}>
                                                        <h4>{j.title}</h4>
                                                        <p>{j.percent}%</p>
                                                    </li>
                                                );
                                            })
                                        ))
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='etcSkill'>
                            <h1 className='title'>그 외에도 이런 툴을 다룰 수 있어요. (Etc Skill)</h1>
                            <div className='skillInner'>
                                <p className='etcSkill'>
                                    Photoship | Illustrator | Figma | XD ...
                                </p>
                            </div>
                        </div>
                        <div className='experienceWrap'>
                            <h1 className='title'>경험 (experience)</h1>
                            <ul className='experienceInner'>
                                {introduce && introduce.map((v, i) =>{
                                    return(
                                        (v.experience.length > 0) && (v.experience.map((j, k) =>{
                                            return(
                                                <li key={k} className='exItem'>
                                                    <p>{j.title}</p>
                                                </li>
                                            );
                                        }))
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </IntroduceContainer>
    );
});

export default Introduce;
