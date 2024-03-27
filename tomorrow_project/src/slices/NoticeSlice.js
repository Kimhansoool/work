import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '../helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/notice';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const noticeList = createAsyncThunk("NoticeSlice/noticeList", async (payload, { rejectWithValue }) => {
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

const NoticeSlice = getDefaultSlice("NoticeSlice", [noticeList]);

export default NoticeSlice.reducer;