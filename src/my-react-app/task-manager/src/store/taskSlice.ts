import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
    filter: string;
}

const initialState: TaskState = {
    filter: 'all',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = taskSlice.actions;
export default taskSlice.reducer;
