import React from 'react';
import { useModal } from './use-modal';
import { TodoForm } from '../components/todo-form/todo-form';
import { TodoTask } from '../components/todo-list/todo-list';

export interface Form<Value> {
    title: string;
    initialValue?: Value;
    onSubmit: (value: Value) => void;
}

export const useForm = () => {
    const { showModal, closeModal } = useModal();

    const openForm = ({ title, initialValue, onSubmit: onPropsSubmit }: Form<TodoTask>) => {
        const onSubmit = (value: TodoTask) => {
            onPropsSubmit(value);
            closeModal();
        }

        showModal({
            title,
            content: (
                <TodoForm
                    initialValue={initialValue}
                    onSubmit={onSubmit}
                    onCancel={closeModal}
                />
            )
        })
    }

    return { openForm };
}
