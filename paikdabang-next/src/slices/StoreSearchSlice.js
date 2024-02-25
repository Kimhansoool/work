import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/api/store';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("StoreSearchSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const myparams = {}

    if (payload?.regionASearch) {
        myparams.region = payload.regionASearch;
    }

    if (payload?.regionDSearch) {
        myparams.city = payload.regionDSearch;
    }

    if (payload?.storeSearch) {
        myparams.store_name_like = payload.storeSearch;
    }

    try {
        const response = await axios.get(API_URL, {
            params: myparams
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const StoreSearchSlice = getDefaultSlice("StoreSearchSlice", [getList]);

export default StoreSearchSlice.reducer;