import React from "react"
import './header.scss';
import { Button, ButtonView } from "../button/button";
import { useModal } from "../hooks/use-modal";
import { TodoTask } from "../todo-list/todo-list";
import { TodoForm } from "../todo-form/todo-form";

import { cn } from "../../utils";
const cls = cn('header');

export interface HeaderProps {
    onAddTodo?: (task: TodoTask) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { showModal, closeModal } = useModal();

    const onSubmit = (task: TodoTask) => {
        props.onAddTodo(task);
        closeModal();
    };

    const onAddClick = () => {
        showModal({
            title: 'Добавить задачу',
            content: (
                <TodoForm
                    onSubmit={onSubmit}
                    onCancel={closeModal}
                />
            )
        })
    }

    return (
        <header className={cls()}>
            <span className={cls('title')}>
                {'Список ваших дел'}
            </span>
            <Button
                className={cls('add-task')}
                view={ButtonView.Primary}
                text={'Добавить задачу'}
                onClick={onAddClick}
            />
        </header>
    )
}