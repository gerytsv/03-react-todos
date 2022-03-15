import './TodoItem.css';
import React from 'react';
import { Todo, TodoStatus } from '../model/todo-model';

export type TodoItemProps = { todo: Todo };

const TodoItem = ( {todo} : TodoItemProps) => {
    return (
        <div className='TodoItem'>
            <span className='TodoItem-text'>
                <span className='TodoItem-id'>{todo.id}</span>
                {todo.text}
            </span>
            <span className='TodoItem-right'>
                <span className='TodoItem-status'>{TodoStatus[todo.status]}</span>
            </span>
        </div>
    );
};

export default TodoItem;
