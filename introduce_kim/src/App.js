import React, {memo} from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
      </Routes>
    </div>
  );
});

export default App;
