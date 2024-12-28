import React, { useState } from 'react';
import { Header } from '../header/header';

import './todo.scss';

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

export const Todo = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    // console.log(tasks);
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
                            {task.title}
                        </div>
                    ))}
                </div>

            ) : (
                <div className="todo-empty">{"У вас еще нет задач"}</div>
            )}
        </div>
    )
}
