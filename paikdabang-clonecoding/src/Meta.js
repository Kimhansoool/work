/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Lee K.H(leekh4232@gmail.com)
 */

import React from 'react';
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import smaple from './assets/img/sample.png';

const Meta = (props) => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="copyright" content={props.copyright} />
                <meta name="content-language" content="ko" />

                <meta property="og:url" content={props.url} />
                <meta property="og:title" content={props.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.image} />
                <link rel="icon" href={props.icon} type="image/png" />
                <link rel="shortcut icon" href={props.shortcutIcon} type="image/png" />
                <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
                {/* 구글 웹폰트 적용 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700;8..60,800;8..60,900&display=swap" rel="stylesheet"></link>
                {/* font awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 */
Meta.defaultProps = {
    title: '빽다방',
    description: 'React.js 포트폴리오 작업물입니다.',
    author: '김한솔',
    subject: 'React.js Frontend Programming',
    copyright: 'Kim Hansol',
    keywords: 'React',
    url:window.location.href,
    image:null,
    icon:null,
    shortcutIcon:null,
    appleTouchIcon:null,
};

export default Meta;
