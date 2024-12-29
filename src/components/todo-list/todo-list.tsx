import React from "react"

import './todo-list.scss';

import { cn } from "../../utils";
import { useForm } from "../../hooks/use-form";
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
    onEditTask: (task: TodoTask) => void;
    onChangeTaskStatus: (idx: number, status: TodoTaskStatus) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const { tasks, onChangeTaskStatus } = props;
    const { openForm } = useForm({ title: 'Редактировать' });

    return (
        <div className={cls()}>
            {tasks.map(task => {
                const onDeleteTask = () => onChangeTaskStatus(task.id, TodoTaskStatus.Deleted);
                const onDoneTask = () => onChangeTaskStatus(task.id, TodoTaskStatus.Done);
                const onRevertTask = () => onChangeTaskStatus(task.id, TodoTaskStatus.Active);
            
                const onEditTask = () => {
                    openForm({
                        initialValue: task,
                        onSubmit: props.onEditTask,
                    })
                };

                return (
                    <div className={cls('item')} key={task.id}>
                        <div className={cls('item-content')}>
                            <div className={cls('item-title')}>{task.title}</div>
                            <div className={cls('item-description')}>{task.description}</div>
                        </div>
                        <div className={cls('item-actions')}>
                            {task.status === TodoTaskStatus.Active ? (
                                <div
                                    className={cls('item-action', { done: true })}
                                    onClick={onDoneTask}
                                />
                            ) : (
                                <div
                                    className={cls('item-action', { revert: true })}
                                    onClick={onRevertTask}
                                />
                            )}
                            <div
                                className={cls('item-action', { edit: true })}
                                onClick={onEditTask}
                            />
                            <div
                                className={cls('item-action', { delete: true })}
                                onClick={onDeleteTask}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}