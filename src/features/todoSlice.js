import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { firestore } from "../firestor";
const todoAdapter = createEntityAdapter({
  selectId: (todo) => todo.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = todoAdapter.getInitialState();

export const extendedTodoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      async queryFn() {
        return firestore.get("Todos");
      },
      transformResponse: (response) => {
        return todoAdapter.setAll(initialState, response);
      },
      transformErrorResponse: (result, error, arg) => [
        { type: "Todo", id: "LIST" },
      ],
      providesTags: (result, error, arg) => [{type: 'Todo', id: 'LIST'}]
    }),
    addTodo: builder.mutation({
      async queryFn(data) {
        const response = firestore.add("Todos", data);
        return response;
      },
      transformResponse: (response) => {
        return todoAdapter.addOne(initialState, response);
      },
      transformErrorResponse: (result, error, todo) => [
        { type: "Todo", id: "LIST" },
      ],
      invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]

    }),
    updaceTodo: builder.mutation({
      async queryFn(data) {
        const response = firestore.update("Todos", data);
        return response;
      },
      transformResponse: (response) => {
        return todoAdapter.updateOne(initialState, response);
      },
      transformErrorResponse: (result, error, todo) => [
        { type: "Todo", id: "LIST" },
      ],
      invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]

    }),
    deleteTodo: builder.mutation({
      async queryFn(id) {
        const response = firestore.delete("Todos", id);
        return response;
      },
      transformResponse: (response) => {
        return todoAdapter.removeOne(initialState, response);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = extendedTodoSlice;

export const selectTodosResult = extendedTodoSlice.endpoints.getTodos.select();

const selectTodosData = createSelector(
  selectTodosResult,
  (result) => result.data
);

export const { selectAll: selectAllTodos, selectById: selectTodoById } =
  todoAdapter.getSelectors((state) => selectTodosData(state) ?? initialState);
