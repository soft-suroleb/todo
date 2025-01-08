import React from "react"

import { TodoTask } from "../todo-list/todo-list";
import { CheckmarkIcon } from "../icons/checkmark/checkmark";
import { SvgSize } from "../icons/types";
import { TrashIcon } from "../icons/trash/trash";

import './footer.scss';
import { cn } from "../../utils";
import { Check, Earth, Moon, Trash2 } from "lucide-react";
const cls = cn('footer');

export interface FooterProps {
    selectedTasks: TodoTask['id'][];
    onDoneSelected: () => void;
    onDeleteSelected: () => void;
}

export const Footer: React.FC<FooterProps> = (props) => {
    const {
        selectedTasks,
        onDoneSelected,
        onDeleteSelected,
    } = props;

    return (
        <footer className={cls()}>
            {selectedTasks.length > 0 ? (
                <div className={cls('selected')}>
                    <span>{`Выбрано: ${selectedTasks.length}`}</span>
                    <Check size={23} onClick={onDoneSelected} />
                    <Trash2 size={18} onClick={onDeleteSelected} />
                </div>
            ) : (
                <div className={cls("not-selected")}>{"Нет выбранных заданий"}</div>
            )}
            <Moon className={cls('mode')} />
            <Earth className={cls('language')} />
        </footer>
    )
}
