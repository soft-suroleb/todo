import React, { useState } from 'react';
import { Header } from '../header/header';
import { TodoList, TodoTask, TodoTaskStatus } from '../todo-list/todo-list';
import { Tag } from '../tags/tags-input';
import { Footer } from '../footer/footer';
import { useTodo } from '../../hooks/use-todo';
import { useFilter } from '../../hooks/use-filter';

import './main.scss';
import { cn } from '../../utils';
const cls = cn('main');

export const Main = () => {
    const { tasks, addTask, editTask, changeTaskStatus } = useTodo();
    const { filter, onChange: onChangeFilter } = useFilter();
    const [selected, setSelected] = useState<TodoTask['id'][]>([]);

    const filteredTasks = tasks.filter(
        task => 
            task.status !== TodoTaskStatus.Deleted &&
            (filter.tags.length === 0 || filter.tags.every(tag => task.tags?.includes(tag)))
    );

    const onTagClick = (tag: Tag) => {
        if (filter.tags.includes(tag) && filter.tags.length === 1) {
            onChangeFilter({ ...filter, tags: [] })
        } else {
            onChangeFilter({ ...filter, tags: [tag] })
        }
    }

    const onChangeSelected = (id: TodoTask['id']) => {
        setSelected(prev => {
            if (!prev.includes(id)) {
                return [...prev, id]; 
            }

            return prev.filter(item => item !== id);
        })
    }

    const onDoneSelected = () => {
        selected.forEach(item => changeTaskStatus(item, TodoTaskStatus.Done));
        setSelected([]);
    }

    const onDeleteSelected = () => {
        selected.forEach(item => changeTaskStatus(item, TodoTaskStatus.Deleted));
        setSelected([]);
    }

    return (
        <main className={cls()}>
            <Header
                onAddTask={addTask}
                filter={filter}
                tags={tasks.map(task => task.tags).filter(Boolean).flat()}
                onChangeFilterTags={(tags) => onChangeFilter({ ...filter, tags })}
            />
            {filteredTasks.length ? (
                <TodoList
                    tasks={filteredTasks}
                    selected={selected}
                    onItemClick={onChangeSelected}
                    onEditTask={editTask}
                    onChangeTaskStatus={changeTaskStatus}
                    onTagClick={onTagClick}
                />
            ) : (
                <div className={cls('empty')}>
                    <span>{"У вас еще нет задач"}</span>
                </div>
            )}
            <Footer
                selectedTasks={selected}
                onDoneSelected={onDoneSelected}
                onDeleteSelected={onDeleteSelected}
            />
        </main>
    )
}
