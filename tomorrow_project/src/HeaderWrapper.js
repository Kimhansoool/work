import React, {memo} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const HeaderWrapper = memo(({element, ...props}) => {
  return (
    <>
        <Header />
            <div>{element}</div>
        <Footer />
    </>
  );
});

export default HeaderWrapper;
