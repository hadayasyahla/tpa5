import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pushTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    tambahTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    hapusTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    ubahTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});
export const { tambahTodos, hapusTodos, ubahTodos, completeTodos } =
  pushTodoReducer.actions;
export const reducer = pushTodoReducer.reducer;