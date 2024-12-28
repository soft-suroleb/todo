import React, { useCallback, useState } from "react"
import './header.scss';
import { Button } from "../button/button";
import { useModal } from "../hooks/use-modal";
import TextField from "@mui/material/TextField";
import { TodoTask } from "../todo/todo";

export interface HeaderProps {
    onAddTodo?: (task: TodoTask) => void;
}

export interface AddTodoFormProps {
    onSubmit: (task: TodoTask) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = (props) => {
    const [task, setTask] = useState<TodoTask>();

    const onChangeTitle = (title: string) => {
        setTask(prev => ({ ...prev, title }));
    }

    const onChangeDescription = (description: string) => {
        setTask(prev => ({ ...prev, description }));
    }

    const onSubmit = () => {
        props.onSubmit(task);
        setTask(undefined);
    }

    return (
        <div>
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
            <Button
                text={"Добавить"}
                onClick={onSubmit}
            />
        </div>
    )
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { showModal, closeModal } = useModal();

    const onSubmit = (value: TodoTask) => {
        props.onAddTodo(value);
        closeModal();
    };

    const onAddClick = () => {
        showModal({
            title: 'Добавить задачу',
            content: <AddTodoForm onSubmit={onSubmit} />
        })
    }

    return (
        <header className="header">
            <span className="header__title">
                {'Список ваших дел'}
            </span>
            <Button
                text={'Добавить дело'}
                onClick={onAddClick}
            />
        </header>
    )
}