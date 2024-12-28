import {
    Fade,
    Modal as BaseModal,
    ModalProps as BaseModalProps,
} from '@mui/material';
import React from 'react';
import { useModal } from '../hooks/use-modal';
import './modal.scss';

export interface ModalProps extends Omit<BaseModalProps, 'content' | 'open' | 'children'> {
    title: string;
    content: React.ReactNode;
}

export const Modal = () => {
    const { modal, closeModal } = useModal();

    if (!modal) {
        return null;
    }

    const { title, content, ...rest } = modal;

    return (
        <BaseModal open onClose={closeModal} {...rest}>
            <Fade in>
                <div className={'modal'}>
                    <div className={'modal__title'}>{title}</div>
                    <div className={'modal__content'}>{content}</div>
                </div>
            </Fade>
        </BaseModal>
    )
}
