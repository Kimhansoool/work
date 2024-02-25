import React, {memo} from 'react';
import styled from 'styled-components';

const CoffeeClassHeaderContainer = styled.div`

.titleContainer{
        width:100%;
        height:500px;
        padding-top:150px;
        background-image: url("/img/commuity_sec_coffeeClassBg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        text-align: center;

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
                line-height: 1.6;
            }
        }
    }`;

const CoffeeClassHeader = memo(() => {
  return (
    <CoffeeClassHeaderContainer>
      <div className='titleContainer'>
          <div className='titleInner'>
            <h3 className='mainTitle'>커피클래스</h3>
            <hr className='divider' />
            <p className='mainSubTitle'>
              모든 커피 이야기가 시작되는 곳! <br />
              커피 클래스에 오신 것을 환영합니다.
            </p>
          </div>
        </div>
    </CoffeeClassHeaderContainer>
  );
});

export default CoffeeClassHeader;
