import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/userSlice.ts";
import {commentSlice} from "./slices/commentSlice.ts";
import {postSlice} from "./slices/postSlice.ts";

export const store = configureStore({
    reducer:{
        userStoreSlice: userSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
        postStoreSlice: postSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

