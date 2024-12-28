import React from "react";
import '../../variables.scss';

import { Todo } from "../todo/todo"; 
import { ModalProvider } from "../contexts/modal";
import { Modal } from "../modal/modal";

export const App = () => {
    return (
        <ModalProvider>
            <Modal />
            <Todo />
        </ModalProvider>
    )
}
