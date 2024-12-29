import React, { useState } from 'react';
import { Header } from '../header/header';

import './main.scss';

export enum TodoTaskStatus {
    Active = 'active',
    Done = 'done',
    Deleted = 'delete',
}

export interface TodoTask {
    id: number;
    title: string;
    description: string;
    status: TodoTaskStatus;
}

export const Main = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);

    const onAddTodo = (task: TodoTask) => {
        setTasks(prev => {
            console.log(task);
            return [
                {
                    ...task,
                    status: TodoTaskStatus.Active,
                    id: Math.max(...prev.map(item => item.id)) + 1
                },
                ...prev,
            ]
        })
    }

    return (
        <div className="todo">
            <Header onAddTodo={onAddTodo} />
            {tasks.length ? (
                <div className="todo-container">
                    {tasks.map((task, idx) => (
                        <div
                            className='todo-item'
                            key={idx}
                        >
                            <div className="todo-item-content">
                                <div className="todo-item-title">{task.title}</div>
                                <div className="todo-item-description">{task.description}</div>
                            </div>
                            <div className="todo-item-actions">
                                <div className="todo-item-done"></div>
                                <div className="todo-item-edit"></div>
                                <div className="todo-item-delete"></div>
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <div className="todo-empty">{"У вас еще нет задач"}</div>
            )}
        </div>
    )
}
