import { getTodosFromLocalStorage } from './storage.js';
import { renderTodos, initTodoHandlers, ul } from './dom.js';

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos, ul);
  initTodoHandlers(todos);
})




