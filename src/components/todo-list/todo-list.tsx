import React, { useState } from "react"

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
import { Check, Pencil, RotateCcw, Trash2 } from "lucide-react";
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
    selected: TodoTask['id'][];
    onItemClick: (id: TodoTask['id']) => void;
    onTagClick: (tag: Tag) => void;
    onEditTask: (task: TodoTask) => void;
    onChangeTaskStatus: (idx: number, status: TodoTaskStatus) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const { tasks, onChangeTaskStatus } = props;
    const { openForm } = useForm();

    return (
        <div className={cls()}>
            {tasks.map(task => {
                const isActive = task.status === TodoTaskStatus.Active;
                const isDone = task.status === TodoTaskStatus.Done;

                const onItemActionClick = (callback: () => void) => {
                    return (e: React.MouseEvent) => {
                        callback();
                        e.stopPropagation();
                    }
                }

                const onDeleteTask = onItemActionClick(() => 
                    onChangeTaskStatus(task.id, TodoTaskStatus.Deleted)
                );
                const onDoneTask = onItemActionClick(() => 
                    onChangeTaskStatus(task.id, TodoTaskStatus.Done)
                )
                const onRevertTask = onItemActionClick(() => 
                    onChangeTaskStatus(task.id, TodoTaskStatus.Active)
                );
            
                const onEditTask = onItemActionClick(() => {
                    openForm({
                        title: 'Редактировать',
                        initialValue: task,
                        onSubmit: props.onEditTask,
                    })
                });

                const isSelected = props.selected.includes(task.id);
                const onItemClick = () => props.onItemClick(task.id);

                return (
                    <div
                        className={cls('item', { done: isDone, selected: isSelected })}
                        key={task.id}
                        onClick={onItemClick}
                    >
                        <div className={cls('item-content')}>
                            <div className={cls('item-title', { done: isDone })}>{task.title}</div>
                            <div className={cls('item-description')}>{task.description}</div>
                        </div>
                        <div className={cls('item-actions')}>
                            {isActive ? (
                                <Check onClick={onDoneTask} size={27} />
                            ) : (
                                <RotateCcw onClick={onRevertTask} size={20}/>
                            )}
                            <Pencil onClick={onEditTask} size={20} />
                            <Trash2 onClick={onDeleteTask} size={20} />
                        </div>
                        {task.tags && (
                            <TagsBadges
                                onTagClick={props.onTagClick}
                                className={cls('item-tags')}
                                view={TagsView.Secondary}
                                tags={task.tags}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
