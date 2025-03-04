import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from './tasksApi';
import taskReducer from './taskSlice';

export const store = configureStore({
    reducer: {
        task: taskReducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
