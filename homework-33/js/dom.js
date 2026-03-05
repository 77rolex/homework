import { todoKeys } from './constans.js';
import {
    createTodo,
    completeTodoById,
    deleteTodoById
} from './service.js';
import { setTodosToLocalStorage } from './storage.js';

const input = document.querySelector('.input')
const buttonCreate = document.querySelector('.button-create')
export const ul = document.querySelector('.todos')

function createTodoElement(todo) {
    ul.insertAdjacentHTML(
        "beforeend",
        `
    <li class="todo" data-id="${todo.id}">
        <div class="todo-text">${todo.text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    </li>
    `
    )
    return ul.lastElementChild
}

export const renderTodos = (todos, container) => {
    container.innerHTML = "";
    todos.forEach(todo => {
        const li = createTodoElement(todo);
        if (todo[todoKeys.is_completed]) {
            li.classList.toggle('completed')
        }
    })
}

export const initTodoHandlers = (todos) => {
    input.addEventListener('focus', () => {
        if (input.classList.contains('empty')) {
            input.classList.remove('empty')
        }
    })

    buttonCreate.addEventListener('click', (e) => {
        e.preventDefault();

        const text = input.value
        if (text.trim() === '') {
            input.classList.add('empty')
            return
        }

        const newTodo = createTodo(todos, text);
        createTodoElement(newTodo);
        setTodosToLocalStorage(todos)
        console.log(todos)
        input.value = "";
    });

    ul.addEventListener('click', (e) => {
        const li = e.target.closest('li.todo')
        if (!li) return

        const id = Number(li.dataset.id)

        if (e.target.classList.contains('button-complete')) {
            completeTodoById(todos, id)
            setTodosToLocalStorage(todos)
            li.classList.toggle('completed')
        }
        if (e.target.classList.contains('button-delete')) {
            deleteTodoById(todos, id)
            li.remove()
            setTodosToLocalStorage(todos)
        }

        console.log(todos)
    })
}
