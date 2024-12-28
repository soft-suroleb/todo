import React from 'react';
import { Header } from '../header/header';
import { useModal } from '../hooks/use-modal';

import './todo.scss';

export const Todo = () => {
    const { showModal } = useModal();

    const addTodo = () => {
        showModal({
            title: 'Добавить задачу',
            content: 'Что-то там'
        })
    }

    return (
        <div className="todo">
            <Header onAddTodo={addTodo} />
            <div className="todos-container">
                <div className="todos-item">Item</div>
                <div className="todos-item">Item</div>
                <div className="todos-item">Item</div>
                <div className="todos-item">Item</div>
            </div>
        </div>
    )
}
