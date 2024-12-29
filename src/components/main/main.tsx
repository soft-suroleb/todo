import React from 'react';
import { Header } from '../header/header';
import { TodoList, TodoTaskStatus } from '../todo-list/todo-list';
import { useTodo } from '../../hooks/use-todo';

import './main.scss';

import { cn } from '../../utils';
const cls = cn('main');

export const Main = () => {
    const { tasks, addTask, editTask, changeTaskStatus } = useTodo();
    const aliveTasks = tasks.filter(task => task.status !== TodoTaskStatus.Deleted);

    return (
        <div className={cls()}>
            <Header onAddTask={addTask} />
            {aliveTasks.length ? (
                <TodoList
                    tasks={aliveTasks}
                    onEditTask={editTask}
                    onChangeTaskStatus={changeTaskStatus}
                />
            ) : (
                <div className={cls('empty')}>
                    <span>{"У вас еще нет задач"}</span>
                </div>
            )}
            <footer>footer</footer>
        </div>
    )
}
