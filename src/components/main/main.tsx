import React, { useState } from 'react';
import { Header } from '../header/header';
import { TodoList, TodoTask, TodoTaskStatus } from '../todo-list/todo-list';

import './main.scss';

import { cn } from '../../utils';
const cls = cn('main');

export const Main = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);

    console.log(tasks);

    const onAddTodo = (task: TodoTask) => {
        setTasks(prev => {
            let maxId = Math.max(...prev.map(item => item.id));
            maxId = isFinite(maxId) ? maxId : 0;

            return [
                {
                    ...task,
                    status: TodoTaskStatus.Active,
                    id: maxId + 1
                },
                ...prev,
            ]
        })
    }

    const onChangeTaskStatus = (idx: number, status: TodoTaskStatus) => {
        setTasks(prev => prev.map(
            task => task.id === idx ? { ...task, status } : task
        ))
    }

    const aliveTasks = tasks.filter(task => task.status !== TodoTaskStatus.Deleted);

    return (
        <div className={cls()}>
            <Header onAddTodo={onAddTodo} />
            {aliveTasks.length ? (
                <TodoList
                    tasks={aliveTasks}
                    onChangeTaskStatus={onChangeTaskStatus}
                />
            ) : (
                <div className={cls('empty')}>
                    <span>{"У вас еще нет задач"}</span>
                </div>
            )}
        </div>
    )
}
