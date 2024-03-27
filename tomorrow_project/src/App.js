import React, {memo} from 'react';
import {Routes, Route} from 'react-router-dom';

import HeaderWrapper from './HeaderWrapper';
import WrapperRoute from './WrapperRoute';

// 컴포넌트
import Main from './pages/Main';

import EmpIndex from './pages/EmploymentSupport';
import DetailPages from './pages/EmploymentSupport/DetailPages';

import FouIndex from './pages/FoundedSupport';
import FDetailPages from './pages/FoundedSupport/FDetailPages';

import MinIndex from './pages/MindSupport';

import EduIndex from './pages/EducationSupport';
import EDetailPages from './pages/EducationSupport/EDetailPage';

import MonIndex from './pages/MoneySupport';
import MoDetailPage from './pages/MoneySupport/MoDetailPage';
import CommunityPage from './pages/Community/CommunityPage';
import ListAdd from './pages/Community/ListAdd';
import ListView from './pages/Community/ListView';
import ListEdit from './pages/Community/ListEdit';
import Join from './pages/Join';

const App = memo(() => {
    return (
      <div>
        <Routes>
          <Route path='*' exact={true} element={<HeaderWrapper  element={<Main />} />} /> 
          <Route path='/index.html' element={<HeaderWrapper element={<Main />} />} /> 

          <Route path='/empSupport' element={<HeaderWrapper element={<EmpIndex />} />} />
          <Route path='/empSupport/:id' element={<HeaderWrapper element={<DetailPages />} />} />

          <Route path='/fouSupport' element={<HeaderWrapper element={<FouIndex />} />} />
          <Route path='/fouSupport/:id' element={<HeaderWrapper element={<FDetailPages />} />} />

          <Route path='/minSupport' element={<HeaderWrapper element={<MinIndex />} />} />

          <Route path='/eduSupport' element={<HeaderWrapper element={<EduIndex />} />} />
          <Route path='/eduSupport/:id' element={<HeaderWrapper element={<EDetailPages />} />} />

          <Route path='/monSupport' element={<HeaderWrapper element={<MonIndex />} />} />
          <Route path='/monSupport/:id' element={<HeaderWrapper element={<MoDetailPage />} />} />

          <Route path='/communityHome' element={<HeaderWrapper element={<CommunityPage />} />} />
          <Route path='/communityAdd' element={<HeaderWrapper element={<ListAdd />} />} />
          <Route path='/communityView/:id' element={<HeaderWrapper element={<ListView />} />} />
          <Route path='/communityEdit/:id' element={<HeaderWrapper element={<ListEdit />} />} />

          <Route path='/login' element={<WrapperRoute element={<Join />} />} />
        </Routes>
      </div>
    );
});

export default App;
