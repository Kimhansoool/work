import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '../helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/monSupportContent';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("MonSupContentSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const myparams = {}

    if(payload?.regionSearch){
        myparams.region = payload.regionSearch;
    }

    if(payload?.titleSearch){
        myparams.title = payload.titleSearch;
    }

    if(payload?.keywordSearch){
        myparams.keyword_like = payload.keywordSearch;
    }

    try {
        // /api/paiksMenu?category=payload.kkk의값
        const response = await axios.get(API_URL, {
            params: myparams
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const MonSupContentSlice = getDefaultSlice("MonSupContentSlice", [getList]);

export default MonSupContentSlice.reducer;