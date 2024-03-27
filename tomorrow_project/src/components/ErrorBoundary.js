/**
 * Next.js의 코드 구조가 잘못된 경우 보여지는 에러 페이지
 * JSX 상의 에러도 포함
 */

import React from 'react';
import Meta from '@/components/Meta';
import styled from 'styled-components';

// next에서 가져오는 이미지는 JSON형식
// --> {src: 파일경로}
import _error from '@/images/_error.png';

const ErrorContainer = styled.div`
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color: #ffffff;
    z-index: 9999999999999999999999999999;
    background-image:url(${_error.src});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
`;

/**
 * 전반적인 에러 상황을 감지하는 클래스
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        // 기본 상태는 에러 없음
        this.state = {hasError: false};
    }

    // 에러가 발생한 경우 자동으로 호출되는 메서드
    static getDerivedStateFromError(error){
        console.error(error);
        // 상태를 에러 있음으로 변경
        return {hasError: true};
    }

    // 이 클래스가 화면에 표시될 때 호출되는 메서드 --> useEffect와 동일
    componentDidCatch(error, errorInfo){
        console.error(error);
        console.error(errorInfo);
    }

    // 화면 출력
    render(){
        if(this.state.hasError){
            return (
            <ErrorContainer>
                <Meta title="에러가 발생했습니다" />
            </ErrorContainer>
            );
        }

        // 에러가 없다면 기본 화면 구성을 출력
        return this.props.children;
    }
}

export default ErrorBoundary;