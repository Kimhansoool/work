/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Lee K.H(leekh4232@gmail.com)
 */

import React from 'react';

// SEO 처리 기능 패키지
import Head from 'next/head';

const Meta = (props) => {
    return(
        <Head>
            <meta charSet='utf-8' />
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
        </Head>
    );
};

/**
 * props에 대한 기본값 설정
 */
Meta.defaultProps = {
    title: '빽다방',
    description: 'Next.js를 활용한 빽다방 클론코딩 사이트입니다.',
    author: 'Kimhs',
    subject: 'Next.js Frontend Programming',
    copyright: 'Kim han sol',
    keywords: 'Nextjs',
    url:null,
    image:null,
    icon:null,
    shortcutIcon:null,
    appleTouchIcon:null,
};

export default Meta;
