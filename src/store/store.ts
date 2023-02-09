import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { rootReducer } from "./root-reducer"
import { todoApi } from "./slices/todoSlice/todoApi"

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware)
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
