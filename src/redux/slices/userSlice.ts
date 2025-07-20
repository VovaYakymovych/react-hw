

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {getApiData} from "../../services/service.api.ts";

type UserSliceType = {
    users: IUser[];
}

const loadUsers = createAsyncThunk('loadUsers', async (_,thunkAPI) => {
    const users = await getApiData<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users)
})

const initUserState:UserSliceType = {users: []};


export const userSlice = createSlice({
    name:'UserSlice',
    initialState: initUserState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })

})

export  const userActions = {...userSlice.actions, loadUsers};