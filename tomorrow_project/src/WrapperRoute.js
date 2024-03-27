import React, {memo} from 'react';

const HeaderWrapper = memo(({element, ...props}) => {
  return (
    <>
        <div>{element}</div>
    </>
  );
});

export default HeaderWrapper;
