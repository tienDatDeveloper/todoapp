import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IItem {
    todo: string,
    id: string,
    createdAt: string,
    status: string,
}

interface ITodo {
    listTodo: IItem[]
}

const initialState: ITodo = {
    listTodo: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<IItem>) => {
            state.listTodo = [...state.listTodo,action.payload];
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.listTodo = state.listTodo.filter(d => d.id !== action.payload);
        }
    }
})


export default todoSlice.reducer
export const {addTodo, deleteTodo} = todoSlice.actions