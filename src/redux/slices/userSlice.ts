

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {getApiData} from "../../services/service.api.ts";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
}

const loadUsers = createAsyncThunk('loadUsers', async (_,thunkAPI) => {
    const users = await getApiData<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users)
})

const loadUser = createAsyncThunk('loadUser', async (id:string ,thunkAPI) => {
    const user = await getApiData<IUser>('/users/' + id);
    return thunkAPI.fulfillWithValue(user)
})

const initUserState:UserSliceType = {users: [], user: null};


export const userSlice = createSlice({
    name:'UsersSlice',
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
        .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        })
})

export  const userActions = {...userSlice.actions, loadUsers, loadUser};