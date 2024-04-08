import React, {memo} from 'react';

const WrapperRoute = memo(({element, ...props}) => {
  return (
    <>
        <div>{element}</div>
    </>
  );
});

export default WrapperRoute;
