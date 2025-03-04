import React from 'react';
import { useDeleteTaskMutation } from '../store/tasksApi';

interface TaskProps {
    task: {
        id: number;
        title: string;
        description: string;
        status: string;
        priority: string;
    };
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const [deleteTask] = useDeleteTaskMutation();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            deleteTask(task.id);
        }
    };

    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export { Task };
