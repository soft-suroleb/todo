import React, { useState } from 'react';

import { TodoTask } from "../todo-list/todo-list";
import TextField from '@mui/material/TextField';
import { Button, ButtonView } from '../button/button';
import { Tag, TagsInput } from '../tags/tags-input';

import './todo-form.scss';
import { cn } from '../../utils';
const cls = cn('todo-form');

export interface TodoFormProps {
    initialValue?: TodoTask;
    onSubmit: (task: TodoTask) => void;
    onCancel: () => void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [task, setTask] = useState<TodoTask>(props.initialValue);

    const onChangeTitle = (title: string) => {
        setTask(prev => ({ ...prev, title }));
    }

    const onChangeDescription = (description: string) => {
        setTask(prev => ({ ...prev, description }));
    }

    const onChangeTags = (tags: Tag[]) => {
        setTask(prev => ({ ...prev, tags }));
    }

    const onCancel = () => {
        setTask(undefined);
        props.onCancel();
    }

    const onSubmit = () => {
        props.onSubmit({
            ...task,
        })
    }

    return (
        <div className={cls()}>
            <TextField
                label="Название"
                variant="standard"
                multiline
                required
                value={task?.title}
                onChange={(e) => onChangeTitle(e.target.value)}
            />
            <TextField
                label="Описание"
                variant="standard"
                multiline
                required
                value={task?.description}
                onChange={(e) => onChangeDescription(e.target.value)}
            />
            <TagsInput
                value={task?.tags || []}
                onChange={onChangeTags}
            />
            <div className={cls('action')}>
                <Button
                    view={ButtonView.Secondary}
                    text={"Отменить"}
                    onClick={onCancel}
                />
                <Button
                    className={cls('submit')}
                    view={ButtonView.Primary}
                    text={"Применить"}
                    onClick={onSubmit}
                />
            </div>
        </div>
    )
}