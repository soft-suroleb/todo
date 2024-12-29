import React from "react"

import { Button, ButtonView } from "../button/button";
import { TodoTask } from "../todo-list/todo-list";
import { useForm } from "../../hooks/use-form";

import './header.scss';
import { cn } from "../../utils";
const cls = cn('header');

export interface HeaderProps {
    onAddTask?: (task: TodoTask) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { openForm } = useForm({ title: 'Добавить задачу' });
    const onAddTaskClick = () => openForm({ onSubmit: props.onAddTask});

    return (
        <header className={cls()}>
            <span className={cls('title')}>
                {'Список ваших задач'}
            </span>
            <Button
                className={cls('add-task')}
                view={ButtonView.Primary}
                text={'Добавить задачу'}
                onClick={onAddTaskClick}
            />
        </header>
    )
}
