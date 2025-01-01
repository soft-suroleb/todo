import React from "react"

import { useForm } from "../../hooks/use-form";
import { CheckmarkIcon } from "../icons/checkmark/checkmark";
import { EditIcon } from "../icons/edit/edit";

import { SvgSize } from "../icons/types";
import { TrashIcon } from "../icons/trash/trash";
import { RevertIcon } from "../icons/revert/revert";
import { Tag } from "../tags/tags-input";

import './todo-list.scss';
import { cn } from "../../utils";
import { TagsBadges, TagsView } from "../tags/tags-badges";
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
    tags?: Tag[];
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
                const isActive = task.status === TodoTaskStatus.Active;
                const isDone = task.status === TodoTaskStatus.Done;

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
                    <div className={cls('item', { done: isDone })} key={task.id}>
                        <div className={cls('item-content')}>
                            <div className={cls('item-title', { done: isDone })}>{task.title}</div>
                            <div className={cls('item-description')}>{task.description}</div>
                        </div>
                        <div className={cls('item-actions')}>
                            {isActive ? (
                                <CheckmarkIcon
                                    className={cls('item-action', { done: true })}
                                    onClick={onDoneTask}
                                    size={SvgSize.XL}
                                />
                            ) : (
                                <RevertIcon
                                    className={cls('item-action', { revert: true })}
                                    onClick={onRevertTask}
                                    size={SvgSize.L}
                                />
                            )}
                            <EditIcon
                                className={cls('item-action', { edit: true })}
                                onClick={onEditTask}
                                size={SvgSize.L}
                            />
                            <TrashIcon
                                className={cls('item-action', { delete: true })}
                                onClick={onDeleteTask}
                                size={SvgSize.L}
                            />
                        </div>
                        {task.tags && (
                            <TagsBadges
                                className={cls('item-tags')}
                                view={TagsView.Primary}
                                tags={task.tags}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}