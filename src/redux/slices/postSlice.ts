
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getApiData} from "../../services/service.api.ts";
import {IPost} from "../../models/IPost.ts";

type PostSliceType = {
    posts: IPost[];
}

const loadPosts = createAsyncThunk('loadPosts', async (_,thunkAPI) => {
    const posts = await getApiData<IPost[]>('/posts');
    return thunkAPI.fulfillWithValue(posts)
})

const initPostState:PostSliceType = {posts: []};


export const postSlice = createSlice({
    name:'postSlice',
    initialState: initPostState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })

})

export  const postActions = {...postSlice.actions, loadPosts};