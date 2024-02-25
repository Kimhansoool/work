import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

let API_URL = '/api/news';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("NewsSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const myParams = {};

    if (payload?.category && payload?.category != "all") {
        // /api/news?category=OOO
        myParams.category = payload.category;
    }

    console.group("getList");
    console.log(API_URL);
    console.log(myParams);
    console.groupEnd();

    try {
        const response = await axios.get(API_URL,{
            params: myParams
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const getItem = createAsyncThunk("NewsSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    console.group("getItem");
    console.log(`${payload.id}`);
    console.groupEnd();

    try {
        const response = await axios.get(`${API_URL}/${payload.id}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const NewsSlice = getDefaultSlice("MenuSlice", [getList, getItem]);

export default NewsSlice.reducer;