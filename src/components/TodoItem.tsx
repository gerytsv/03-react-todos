import './TodoItem.css';
import React, { FunctionComponent } from 'react';
import { Todo, TodoStatus } from '../model/todo-model';

export type TodoItemProps = { todo: Todo ,  onDeleteTodo: any};

const TodoItem: FunctionComponent<TodoItemProps>  = ( {todo, onDeleteTodo} ) => {
	const deleteTodo = (event: any) => {
		onDeleteTodo(todo)
	}

    return (
        <div className='TodoItem'>
            <span className='TodoItem-text'>
                <span className='TodoItem-id'>{todo.id}</span>
                {todo.text}
            </span>
            <span className='TodoItem-right'>
                <span className='TodoItem-status'>{TodoStatus[todo.status]}</span>
				<button className='button' onClick={deleteTodo}>DELETE</button>
            </span>
        </div>
    );
};

export default TodoItem;
