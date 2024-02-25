import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/api/menu';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("MenuSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const MenuSlice = getDefaultSlice("MenuSlice", [getList]);

export default MenuSlice.reducer;