import React from "react"

import { Button, ButtonView } from "../button/button";
import { TodoTask } from "../todo-list/todo-list";
import { useForm } from "../../hooks/use-form";
import { TagsFilter } from "../tags-filter/tags-filter";
import { Tag } from "../tags/tags-input";

import './header.scss';
import { cn } from "../../utils";
import { Filter } from "../../hooks/use-filter";
const cls = cn('header');

export interface HeaderProps {
    onAddTask?: (task: TodoTask) => void;
    filter: Filter;
    tags: Tag[];
    onChangeFilterTags: (tags: Tag[]) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { openForm } = useForm();
    const onAddTaskClick = () => openForm({ title: 'Добавить задачу', onSubmit: props.onAddTask});

    return (
        <header className={cls()}>
            <TagsFilter
                filter={props.filter.tags}
                tags={props.tags}
                onChange={props.onChangeFilterTags}
            />
            <Button
                className={cls('add-task')}
                view={ButtonView.Primary}
                text={'Добавить задачу'}
                onClick={onAddTaskClick}
            />
        </header>
    )
}
