import React, { useState } from "react"

import { TodoTask } from "../todo-list/todo-list";
import { CheckmarkIcon } from "../icons/checkmark/checkmark";
import { SvgSize } from "../icons/types";
import { TrashIcon } from "../icons/trash/trash";

import './footer.scss';
import { cn } from "../../utils";
import { Check, Earth, Moon, Sun, Trash2 } from "lucide-react";
import { themeModeLS } from "../../const";
const cls = cn('footer');

export interface FooterProps {
    selectedTasks: TodoTask['id'][];
    onDoneSelected: () => void;
    onDeleteSelected: () => void;
}

enum ThemeMode {
    Dark = 'dark',
    Light = 'light',
}

export const Footer: React.FC<FooterProps> = (props) => {
    const [mode, setMode] = useState<ThemeMode>(localStorage.getItem(themeModeLS) as ThemeMode || ThemeMode.Dark);
    const {
        selectedTasks,
        onDoneSelected,
        onDeleteSelected,
    } = props;

    const onChangeMode = () => {
        setMode(prev => {
            const newMode = prev === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
            localStorage.setItem(themeModeLS, newMode);
            return newMode;
        })
    }

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
            {mode === ThemeMode.Dark ? (
                <Moon
                    className={cls('mode')}
                    onClick={onChangeMode}
                />
            ) : (
                <Sun
                    className={cls('mode')}
                    onClick={onChangeMode}
                />
            )}
            <Earth className={cls('language')} />
        </footer>
    )
}
