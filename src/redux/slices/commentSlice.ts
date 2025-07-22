import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getApiData} from "../../services/service.api.ts";
import {IComment} from "../../models/IComment.ts";

type CommentSliceType = {
    comments: IComment[];
}

const loadComments = createAsyncThunk('loadComments', async (_,thunkAPI) => {
    const comments = await getApiData<IComment[]>('/comments');
    return thunkAPI.fulfillWithValue(comments)
})

const initCommentState:CommentSliceType = {comments: []};


export const commentSlice = createSlice({
    name:'commentSlice',
    initialState: initCommentState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })
        .addCase(loadComments.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })

})

export  const commentActions = {...commentSlice.actions, loadComments};