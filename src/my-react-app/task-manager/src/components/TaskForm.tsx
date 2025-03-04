import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateTaskMutation, useUpdateTaskMutation } from '../store/tasksApi';

interface TaskFormProps {
    task?: {
        id: number;
        title: string;
        description: string;
        status: string;
        priority: string;
    };
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
    const [createTask] = useCreateTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    const initialValues = task || {
        title: '',
        description: '',
        status: 'нове',
        priority: 'medium',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
    });

    const handleSubmit = (values: any) => {
        if (task) {
            updateTask({ ...task, ...values });
        } else {
            createTask(values);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" id="title" />
                    <ErrorMessage name="title" component="div" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <Field name="description" id="description" />
                    <ErrorMessage name="description" component="div" />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <Field as="select" name="status" id="status">
                        <option value="нове">Нове</option>
                        <option value="в роботі">В роботі</option>
                        <option value="завершене">Завершене</option>
                    </Field>
                </div>

                <div>
                    <label htmlFor="priority">Priority</label>
                    <Field as="select" name="priority" id="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Field>
                </div>

                <button type="submit">Save</button>
            </Form>
        </Formik>
    );
};

export { TaskForm };
