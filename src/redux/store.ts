import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/userSlice.ts";

export const store = configureStore({
    reducer:{
        userStoreSlice: userSlice.reducer,
        // CommentStoreSlice: commentSlice.reducer,
        // PostStoreSlice: postSlice.reducer,
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

