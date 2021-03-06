import './TodoList.css';
import React from 'react';
// import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { Todo } from '../model/todo-model';

export type TodoListProps = { todos: Todo[], onDeleteTodo: any };

const TodoList = ({ todos, ...props }: TodoListProps) => {
    return (
        <ul>
            {todos.map(( todo ) => (
                <TodoItem key={todo.id} todo={todo} {...props}/>
            ))}
        </ul>
    );
};

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             status: PropTypes.oneOf([ALL_STATUSES, ACTIVE, COMPLETED, CANCELED]),
//         })
//     ).isRequired,
// };

export default TodoList;
