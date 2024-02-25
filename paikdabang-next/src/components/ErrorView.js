/**
 * Backend와의 연동 과정에서 문제가 발생한 경우
 * 1) URL이 잘못됨 --> 404
 * 2) 백엔드에 전송하라 파라미터가 잘못됨 --> 대부분 400에러
 * 3) 백엔드 자체가 에러인 상황
 */

import React, {memo} from 'react';

const ErrorView = memo(({error}) => {
  return (
    <div>
      <h1>Opps {error.code} Error.</h1>
      <p>{error.message}</p>
    </div>
  );
});

export default ErrorView;
