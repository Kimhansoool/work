/**
 * /src/helper/ReduxHelper.js
 * 
 * ReduxSlice를 작업하면서 반복되는 중복코드의 모듈화
 */

import { createSlice } from "@reduxjs/toolkit";

// 리덕스가 로딩상태를 처리하기 위한 함수
function pending(state, {meta, payload}) {
    return { ...state, loading: true }
}

// 리덕스가 백엔드와의 통신에 성공한 경우 실행되는 함수
function fulfilled(state, {meta, payload}) {
    return {
        ...state, 
        data: payload,
        loading: false,
        error: null
    }
}

// 리덕스가 백엔드와의 통신에 실패한 경우 실행되는 함수
function rejected(state, {meta, payload}){
    return {
        data: payload, 
        loading: false,
        error: {
            code: payload?.status ? payload?.status : 500,
            message: payload?.statusText ? payload?.statusText : 'Server Error'
        }
    }
}

function getDefaultSlice(sliceName, asyncReducers=[]){
    return createSlice({
        name: sliceName,
        // 이 모듈이 관리하고자하는 상태값들을 명시
        initialState: {
            data: null,
            loading: false,
            error: null
        },
        // 상태값을 갱신하기 위한 함수들을 구현
        // Ajax의 처리 과정에 따라 자동으로 실행된다.
        extraReducers: (builder) => {
            asyncReducers.forEach((item, index) =>{
                builder.addCase(item.pending, pending);
                builder.addCase(item.fulfilled, fulfilled);
                builder.addCase(item.rejected, rejected);
            });
        },
    });
}

export default getDefaultSlice;