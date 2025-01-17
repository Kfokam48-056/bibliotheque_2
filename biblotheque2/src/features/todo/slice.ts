/*
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../models/entities";
import {fetchTodos} from "./actions.ts";

interface TodoSliceState {
    todos: Todo[]
    activeTodo?: Todo
    pending: boolean
    hasError: boolean
}

const initialState: TodoSliceState = {
    todos: [],
    pending: false,
    hasError: false,
}

const slice = createSlice({
    name: 'todo.slice',
    initialState,
    reducers: {
        loadTodos(state, action: PayloadAction<Todo[]>) {
            state.todos = action.payload
        },
        setActiveTodo(state, action: PayloadAction<Todo | undefined>) {
            state.activeTodo = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.pending = true
            state.hasError = false
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            state.hasError = true
            state.pending = false
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.hasError = false
            state.pending = false
            state.todos = action.payload
        })
    }
})

export const todoReducer = slice.reducer
export const {loadTodos, setActiveTodo} = slice.actions
*/