import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../constants/constants";

export const fetchPicture = createAsyncThunk(
    'picture/fetchPicture',
    async (holiday) => {
        const res = await fetch(`${URI_API}/image/${holiday}`);
        const data = await res.json();
        return data;
    }
);

export const fetchPictureId = createAsyncThunk(
    'picture/fetchPictureId',
    async (id) => {
        const res = await fetch(`${URI_API}/image/${id}`);
        const data = await res.json();
        return data;
    }
);

const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
        urlImg: '',
        idImg: '',
        loading: '',
    },
    extraReducers: {
        [fetchPicture.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchPicture.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchPicture.rejected]: (state) => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },

        [fetchPictureId.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchPictureId.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchPictureId.rejected]: (state) => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },
    }
});

export default pictureSlice.reducer;