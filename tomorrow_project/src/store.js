import { configureStore } from '@reduxjs/toolkit';
import HeaderSlice from './slices/HeaderSlice';
import MainInfoSlice from './slices/MainInfoSlice';
import AppliedProjectSlice from './slices/AppliedProjectSlice';
import NoticeSlice from './slices/NoticeSlice';
import EmpSupContentSlice from './slices/EmpSupContentSlice';
import FouSupContentSlice from './slices/FouSupContentSlice';
import MinSupContentSlice from './slices/MinSupContentSlice';
import EduSupContentSlice from './slices/EduSupContentSlice';
import MonSupContentSlice from './slices/MonSupContentSlice';
import CommunityListSlice from './slices/CommunityListSlice';

const store = configureStore({
    reducer: {
        HeaderSlice, MainInfoSlice, AppliedProjectSlice, NoticeSlice, EmpSupContentSlice, FouSupContentSlice,
        MinSupContentSlice, EduSupContentSlice, MonSupContentSlice, CommunityListSlice
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});
export default store;