//import {createAsyncThunk} from "@reduxjs/toolkit";
import { todoService } from "../../apis/config";
//import {AxiosError} from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Todo } from "../../models/entities";

// export const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_, { rejectWithValue }) => {
//     try {
//         return await todoService.getTodos()
//     }
//     catch (error) {
//         if(error instanceof AxiosError) return rejectWithValue(error.response?.data)
//         return rejectWithValue(error);
//     }
// })

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: async () => ({ data: {} }),
  endpoints: (build) => ({
    fetchTodos: build.query<Todo[], void>({
      queryFn: async () => {
        try {
          const data = await todoService.getTodos();
          return { data };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    fetchTodo: build.query<Todo, number>({
      queryFn: async (id) => {
        try {
          const data = await todoService.getTodo(id);
          return { data };
        } catch (e) {
          return { error: e };
        }
      },
    }),
  }),
});

export const { useFetchTodosQuery } = todoApi;
export const { useFetchTodoQuery } = todoApi;
