import React, { createContext, useMemo, useState } from 'react';
import { ModalProps } from '../modal/modal';

export interface ModalContextType {
    modal?: ModalProps;
    showModal: (modal: ModalProps) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
    showModal: () => {},
    closeModal: () => {},
});

export const ModalProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [modal, setModal] = useState<ModalProps>();

    const value: ModalContextType = useMemo(() => ({
        modal,
        showModal: setModal,
        closeModal: () => setModal(undefined),
    }), [modal]);

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    )
}
