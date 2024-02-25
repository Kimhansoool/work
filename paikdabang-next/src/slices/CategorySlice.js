import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/api/paiksMenu';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("CategorySlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const myParams = {};

    if (payload?.category) {
        myParams.category = payload.category;
    }

    try {
        // /api/paiksMenu?category=payload.kkk의값
        const response = await axios.get(API_URL,{
            params: myParams
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const CategorySlice = getDefaultSlice("CategorySlice", [getList]);

export default CategorySlice.reducer;