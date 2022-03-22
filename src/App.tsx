import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MOCK_TODOS from './model/mock-todos';
import { Todo } from './model/todo-model';

function App() {
	const [todos, setTodos] = useState(MOCK_TODOS);
    return (
        <div className='App-header'>
            <h1>Todos</h1>
			<TodoInput onSubmitTodo={(todo: Todo) => setTodos(oldTodos => [...oldTodos, todo])}/>
            <TodoList todos={todos} onDeleteTodo={(todo: Todo) => setTodos(oldTodos => oldTodos.filter(currentTodo => currentTodo.id !== todo.id))}/>
        </div>
    );
}

export default App;
