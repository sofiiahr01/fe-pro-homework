'use strict';

(function () {
    const todoForm = document.querySelector('[data-todo-form]');
    const todoListContainer = document.querySelector('#todoItems');

    const createTodoElement = ({ title, description }) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';

        wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>
        `;

        return wrapper
    };

    const getFormHandlers = (todoForm) => {
        let isFormSubmitDisabled = true;
        const fields = {};

        const init = () => {
            todoForm.querySelectorAll('input, textarea').forEach(({name}) => {
                fields[name] = false;
            })
        }
        init();

        console.log(fields)

        const handleSubmit = (event) => {
            event.preventDefault();
            if(isFormSubmitDisabled) return;

            const inputs = event.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {});

            const todoItemElement = createTodoElement(data);
            todoListContainer.prepend(todoItemElement);
            event.target.reset();
        };

        const inputHandler = ({target}) => {
            const formSubmitBtn = todoForm.querySelector('button[type=submit]');

            if(target.value.trim().length) {
                if(!fields[target.name]) fields[target.name] = true;
            } else {
                if(fields[target.name]) fields[target.name] = false;
            }

            isFormSubmitDisabled = !Object.values(fields).every((field) => field);

            if(!isFormSubmitDisabled) {
                formSubmitBtn.removeAttribute('disabled')
            } else {
                formSubmitBtn.setAttribute('disabled', '')
            }
        }

        return {
            inputHandler,
            handleSubmit
        };
    };

    const { inputHandler, handleSubmit } = getFormHandlers(todoForm);

    todoForm.addEventListener('input', inputHandler);
    todoForm.addEventListener('submit', handleSubmit);

})();

