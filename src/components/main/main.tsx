import React, { useState } from 'react';
import { Header } from '../header/header';
import { TodoList, TodoTaskStatus } from '../todo-list/todo-list';
import { useTodo } from '../../hooks/use-todo';
import { Tag } from '../tags/tags-input';

import './main.scss';

import { cn } from '../../utils';
import { useFilter } from '../../hooks/use-filter';
const cls = cn('main');

export const Main = () => {
    const { tasks, addTask, editTask, changeTaskStatus } = useTodo();
    const { filter, onChange: onChangeFilter } = useFilter();

    const filteredTasks = tasks.filter(
        task => 
            task.status !== TodoTaskStatus.Deleted &&
            (filter.tags.length === 0 || filter.tags.every(tag => task.tags?.includes(tag)))
    );

    return (
        <div className={cls()}>
            <Header
                onAddTask={addTask}
                filter={filter}
                tags={tasks.map(task => task.tags).filter(Boolean).flat()}
                onChangeFilterTags={(tags) => onChangeFilter({ ...filter, tags })}
            />
            {filteredTasks.length ? (
                <TodoList
                    tasks={filteredTasks}
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
