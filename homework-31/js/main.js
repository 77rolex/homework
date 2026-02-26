'use strict';

const todoList = []

const todoListKeys = {
    id: 'id',
    description: 'description',
    is_completed: 'is_completed',
}

const errorTodoId = todoId => `ID ${todoId} is not found`;

const getNewTodoId = (todoList) =>
    todoList.reduce((maxId, todoId) => Math.max(maxId, todoId[todoListKeys.id]), 0) + 1;

const createTodo = (todoList, description) => {
    const newTodo = {
        [todoListKeys.id]: getNewTodoId(todoList),
        [todoListKeys.description]: description,
        [todoListKeys.is_completed]: false,
    }
    todoList.push(newTodo)
    return todoList
};

const completeTodoById = (todoList, todoId) => {
    const todo = todoList.find(todo => todo[todoListKeys.id] === todoId)
    if (todo === undefined){
        console.error(errorTodoId(todoId))
        return null
    }
    todo.is_completed = !todo.is_completed
    return todo
}

const deleteTodoById = (todoList, todoId) => {
    const todoIndex = todoList.findIndex( todo => todo[todoListKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(errorTodoId(todoId))
        return null
    }
    todoList.splice(todoIndex, 1)
    return todoList
}