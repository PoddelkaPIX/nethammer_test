import { combineReducers } from "@reduxjs/toolkit";
import { todoApi } from "./slices/todoSlice/todoApi";
import todoSlice from "./slices/todoSlice/todoSlice";


export const rootReducer = combineReducers({
    todos: todoSlice,
    [todoApi.reducerPath]: todoApi.reducer,
})