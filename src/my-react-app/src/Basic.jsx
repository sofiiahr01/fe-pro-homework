import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css'

const Basic = () => (
    <div>
        <h1>Fill the form!</h1>
        <Formik
            initialValues={{ name: '', email: '', phone: ''}}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }
                else if (
                    !/^[A-Za-z\s]+$/.test(values.name)
                ) {
                    errors.name = 'Invalid name';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email';
                }
                if (!values.phone) {
                    errors.phone = 'Required';
                } else if (!/^\d{10}$/.test(values.phone)) {
                    errors.phone = 'Invalid phone';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label>Name: </label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component="div" className="error"/>
                    <br/>
                    <label>Email: </label>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div" className="error"/>
                    <br/>
                    <label>Phone number: </label>
                    <Field type="tel" name="phone"/>
                    <br/>
                    <ErrorMessage name="phone number" component="div" className="error"/>
                    <br/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Basic;
