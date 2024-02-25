import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/api/titleContainer';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const titleList = createAsyncThunk("TitleContainerSlice/titleList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL, {
            params: {
                category: payload.category
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const TitleContainerSlice = getDefaultSlice("TitleContainerSlice", [titleList]);

export default TitleContainerSlice.reducer;