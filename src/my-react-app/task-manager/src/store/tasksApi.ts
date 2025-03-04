import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => 'tasks',
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: 'tasks',
                method: 'POST',
                body: newTask,
            }),
        }),
        updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `tasks/${updatedTask.id}`,
                method: 'PATCH',
                body: updatedTask,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = tasksApi;
