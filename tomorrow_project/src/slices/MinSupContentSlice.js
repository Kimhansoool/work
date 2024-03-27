import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '../helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/minSupportContent';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("MinSupContentSlice/getList", async (payload, { rejectWithValue }) => {
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

const MinSupContentSlice = getDefaultSlice("MinSupContentSlice", [getList]);

export default MinSupContentSlice.reducer;