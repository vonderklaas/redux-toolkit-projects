// Methods to interact with API
// They are pulled out of component logic in a separate apiSlice
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // Default
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  // RTK Query caches stuff, let's create a tag to invalidate cache (to see changes in UI)
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET',
      }),
      // Transform response (so new todo now gets added to the top, not bottom)
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo.id,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

// RTK Query creates custom hooks based on our endpoints names
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
