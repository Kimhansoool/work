import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import GlobalStyle from "@/styles/GlobalStyles";
import ErrorBoundary from "@/components/ErrorBoundary";

// 리덕스 모듈
import wrapper from './_redux';
import { Provider } from "react-redux";

const App = ({ Component, pageProps }) => {
  // wrapper로부터 reduxStore를 꺼낸다
  const {store} = wrapper.useWrappedStore(pageProps);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Meta />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;

