import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import { TaskForm } from './components/TaskForm';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/task/new" element={<TaskForm />} />
                    <Route path="/task/:id/edit" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
