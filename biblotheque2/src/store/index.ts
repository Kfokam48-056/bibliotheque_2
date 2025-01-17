import {configureStore} from "@reduxjs/toolkit";
import {todoApi} from "../features/todo";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
       // todo: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
})

type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

