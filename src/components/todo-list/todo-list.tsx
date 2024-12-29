import React from "react"

import './todo-list.scss';

import { cn } from "../../utils";
const cls = cn('todo-list');

export enum TodoTaskStatus {
    Active = 'active',
    Done = 'done',
    Deleted = 'deleted',
}

export interface TodoTask {
    id: number;
    title: string;
    description: string;
    status: TodoTaskStatus;
}

export interface TodoListProps {
    tasks: TodoTask[];
    onChangeTaskStatus: (idx: number, status: TodoTaskStatus) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const { tasks, onChangeTaskStatus } = props;

    const onDeleteTask = (idx: number) => onChangeTaskStatus(idx, TodoTaskStatus.Deleted);
    const onDoneTask = (idx: number) => onChangeTaskStatus(idx, TodoTaskStatus.Done);
    const onRevertTask = (idx: number) => onChangeTaskStatus(idx, TodoTaskStatus.Active);

    return (
        <div className={cls()}>
            {tasks.map(task => (
                <div
                    className={cls('item')}
                    key={task.id}
                >
                    <div className={cls('item-content')}>
                        <div className={cls('item-title')}>{task.title}</div>
                        <div className={cls('item-description')}>{task.description}</div>
                    </div>
                    <div className={cls('item-actions')}>
                        {task.status === TodoTaskStatus.Active ? (
                            <div
                                className={cls('item-action', { done: true })}
                                onClick={() => onDoneTask(task.id)}
                            />
                        ) : (
                            <div
                                className={cls('item-action', { revert: true })}
                                onClick={() => onRevertTask(task.id)}
                            />
                        )}
                        <div className={cls('item-action', { edit: true })}></div>
                        <div
                            className={cls('item-action', { delete: true })}
                            onClick={() => onDeleteTask(task.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}