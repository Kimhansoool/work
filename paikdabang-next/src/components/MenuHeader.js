import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import mq from '@/styles/MediaQuery';

import { titleList } from '@/slices/TitleContainerSlice';
import { useSelector, useDispatch } from 'react-redux';

const MenuHeaderContainer = styled.div`
    .titleContainer{
        width:100%;
        height:500px;
        padding-top:150px;
        background-image: url("/img/news_sec_Bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        text-align: center;

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
`;

const MenuHeader = memo(() => {
    const [countIndex, setCountIndex] = useState(0);
    const handleOnClick = (e, k) =>{
        const arr = [];
        arr.push(k);

        setCountIndex(k);
        console.log(e.currentTarget);
        window.localStorage.setItem("current", JSON.stringify(arr));
    };

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.CategorySlice);

    useEffect(() =>{
        dispatch(titleList());
    }, []);

    return (
        <MenuHeaderContainer>
            {data && data.map((v, i) =>{
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
        </MenuHeaderContainer>
    );
});

export default MenuHeader;
