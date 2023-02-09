import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import { todoApi } from "./slices/todoSlice/todoApi";
import todoSlice from "./slices/todoSlice/todoSlice";


export const rootReducer = combineReducers({
    counter: counterSlice,
    todos: todoSlice,
    [todoApi.reducerPath]: todoApi.reducer,
})