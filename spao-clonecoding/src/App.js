import React, {memo} from 'react';
import styled from 'styled-components';

import {NavLink, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

const AppContainer = styled.div`
`;

const App = memo(() => {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='*' exact={true} element={<Main />} /> 
        <Route path='/index.html' element={<Main />} /> 
      </Routes>
      <Footer />
    </AppContainer>
  );
});

export default App;
