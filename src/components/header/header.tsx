import React from "react"
import './header.scss';
import { Button } from "../button/button";
import { useModal } from "../hooks/use-modal";

export interface HeaderProps {
    onAddTodo?: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="header">
            <span className="header__title">
                {'Список ваших дел'}
            </span>
            <Button
                text={'Добавить дело'}
                onClick={props.onAddTodo}
            />
        </header>
    )
}