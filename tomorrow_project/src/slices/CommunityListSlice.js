import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '../helper/ReduxHelper';
import axios from 'axios';
import { rest } from 'lodash';

const API_URL = '/communityListN';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("CommunityListSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL, {
            params:{
                title: payload.keyword
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const getItem = createAsyncThunk("CommunityListSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${API_URL}/${payload?.id}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const postItem = createAsyncThunk("CommunityListSlice/postItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.post(API_URL, payload);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const putItem = createAsyncThunk("CommunityListSlice/putItem", async (payload, { rejectWithValue }) => {
    let result = null;
    const {id, ...rest} = payload;

    try {
        const response = await axios.put(`${API_URL}/${id}`, rest);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const deleteItem = createAsyncThunk("CommunityListSlice/deleteItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.delete(`${API_URL}/${payload?.id}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const CommunityListSlice = getDefaultSlice("CommunityListSlice", [getList, getItem, postItem, putItem, deleteItem]);

export default CommunityListSlice.reducer;