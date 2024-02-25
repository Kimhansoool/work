import React, {memo} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Pages/Main';

import PropTypes from 'prop-types';

const App = memo(() => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
        <Route path='/index.html'element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;