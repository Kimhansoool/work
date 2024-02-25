import Document, { Html, Head, Main, NextScript } from 'next/document'
// styledComponent를 사용하기 위한 함수
import { ServerStyleSheet } from 'styled-components';

class MyClass extends Document {
  /** 
   * 초기화 함수(고정코드)
   * 컴포넌트 전역에서 styledComponent를 사용할 수 있게 함.
   */
  static async getInitialProps(ctx){
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
    }
  }

  /** 
   * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자임
   */
  render(){
    return(
      <Html>
        <Head>
          {/*
            <head>는 순수 HTML태그
            <Head>는 next.js의 컴포넌트.
            이 안에서 charset과 viewport 지정은 자동으로 이루어진다.
            그 외에 개발자가 적용하고자 하는 외부 CSS나 JS리소스 참조, SEO 구현 등을 처리할 수 있다.
          */}
          {/* 구글 웹폰트 적용 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700;8..60,800;8..60,900&display=swap" rel="stylesheet"></link>
          {/* font awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

          {/* getInitialProps에서 리턴한 styleTages를 출력한다. */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyClass;

