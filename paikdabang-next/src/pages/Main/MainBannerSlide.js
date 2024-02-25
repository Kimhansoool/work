import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';

const MainBannerSliderContains = styled.div`
  position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;

    /* 부모요소의 넓이를 기준으로 높이를 설정함 ex) 100%로 설정하면 정사각형이 되고, 50%이면 2:1 비율의 직사각형임 */
    // 미디어 쿼리로 모바일 사이즈 일 때 이 값을 좀 더 넉넉히 주세요.
    padding-bottom: 30%; 

    .wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;


        .rsis-container {
            div {
                background-position: center center  !important;
                background-size: cover !important;
            }
        }
    }
`;

export default function Home() {
    const images = [
        { url: "/img/slides/slide1.jpg" },
        { url: "/img/slides/slide2.jpg" },
        { url: "/img/slides/slide3.jpg" },
        { url: "/img/slides/slide4.jpg" },
        { url: "/img/slides/slide5.jpg" },
    ];

  return (
    <MainBannerSliderContains>
        <div className="wrap">
            <SimpleImageSlider
                width="100%"
                height="100%"
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={5.0}
                loop={true}
            />
        </div>
    </MainBannerSliderContains>
  );
}