import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import MOCK_TODOS from './model/mock-todos';

function App() {
    return (
        <div className='App-header'>
            <h1>Todos</h1>
            <TodoList todos={MOCK_TODOS} />
        </div>
    );
}

export default App;
