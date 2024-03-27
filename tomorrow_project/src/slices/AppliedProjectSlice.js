import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '../helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/appliedProject';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("AppliedProjectSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        // /api/paiksMenu?category=payload.kkk의값
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const AppliedProjectSlice = getDefaultSlice("AppliedProjectSlice", [getList]);

export default AppliedProjectSlice.reducer;