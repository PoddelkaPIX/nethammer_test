import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "./todoTypes";

type todoState = {
    total: number,
    limit: number,
    skip: number,
    filter: string
    list: ITodo[],
    loading: boolean
}

const initialState: todoState = {
    total: 0,
    limit: 10,
    skip: 0,
    filter: "",
    list: [],
    loading: true
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action: PayloadAction<ITodo[]>) =>  {
            for (let todo of action.payload){
                state.list.push(todo)
            }
            state.skip = state.list.length
            state.loading = false
        }, 
        setTotal: (state, action: PayloadAction<number>) =>  {
            state.total = action.payload
        },
        clearTodos: (state) => {
            state.list.splice(0, state.list.length)
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setSkip: (state, action: PayloadAction<number>) => {
            state.skip = action.payload
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        startLoading: (state) => {
            state.loading = true
        }
    }
})

export const {addTodos, setFilter, startLoading,  setTotal, setLimit, setSkip, clearTodos} = todoSlice.actions
export default todoSlice.reducer

