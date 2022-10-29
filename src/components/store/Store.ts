import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TodoSlice from "./TodoSlice";


const store = configureStore({
    reducer: {
        todo: TodoSlice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch