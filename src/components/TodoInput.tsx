import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Todo } from '../model/todo-model';

type TodoInputProps = { onSubmitTodo: any};

type TodoInputState = { text: string};

export default class TodoInput extends Component<TodoInputProps, TodoInputState> {
    // static propTypes = {
    //     onSubmitTodo: PropTypes.func.isRequired,
    // };

    state: TodoInputState = {
        text: '',
    };

    submitTodo = (event: any) => {
        event.preventDefault();
        const trimmedText = this.state.text.trim();

        if (trimmedText.length > 0) {
			this.setState({ text: '' });
			this.props.onSubmitTodo(new Todo(trimmedText));
		}
    };

    changeText = (event: any) => {
        this.setState({ text: event.target.value });
    };

    render() {
        return (
            <form className='TodoInput-form' onSubmit={this.submitTodo}>
                <input
                    id='text'
                    type='text'
                    placeholder='What to do next?'
                    value={this.state.text}
                    onChange={this.changeText}
                ></input>
				<button type="submit" className="button">Submit</button>
            </form>
        );
    }
}
