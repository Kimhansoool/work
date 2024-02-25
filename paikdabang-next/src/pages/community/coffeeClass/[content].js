import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CoffeeClassSlice';
import Link from 'next/link';
import mq from '@/styles/MediaQuery';

import CoffeeClassHeader from '@/components/CoffeeClassHeader';

const ContentContainer = styled.div`
  margin-top:120px;
  width:100%;
  height:100%;

  ${mq.maxWidth('xl')`
    margin-top:70px;
  `}

  .contentWrap{
    max-width: 1200px;
    margin:60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Content = memo(() => {

  const router = useRouter();
  const {content} = router.query;
  // console.log(content);

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state) => state.CoffeeClassSlice);

  useEffect(() =>{

    if(content){
      dispatch(getList({content: content}));
    }
  }, [content]);

    return (
      <ContentContainer>
        <CoffeeClassHeader />
        {/* {JSON.stringify(data)} */}
        <div className='contentWrap'>
          {data && data.map((v, i) =>{
            return(
              <img className='contentImg' src={v.content_img} />
            );
          })}
        </div>
      </ContentContainer>
    );
  });

export default Content;
