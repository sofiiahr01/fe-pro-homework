import React, { useEffect } from 'react';
import { useGetTasksQuery } from '../store/tasksApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/taskSlice';
import { Task } from './Task';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const { data: tasks, error, isLoading } = useGetTasksQuery();
    const filter = useSelector((state: RootState) => state.task.filter);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter(e.target.value));
    };

    const filteredTasks = tasks?.filter((task) =>
        filter === 'all' || task.status === filter
    );

    useEffect(() => {
        // Fetch tasks when component mounts
    }, [dispatch]);

    return (
        <div>
            <div>
                <select onChange={handleFilterChange} value={filter}>
                    <option value="all">All</option>
                    <option value="нове">Нове</option>
                    <option value="в роботі">В роботі</option>
                    <option value="завершене">Завершене</option>
                </select>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading tasks</p>}
                {filteredTasks?.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
