import React from "react";
import '../../variables.scss';

import { Main } from "../main/main"; 
import { ModalProvider } from "../contexts/modal";
import { Modal } from "../modal/modal";

export const App = () => {
    return (
        <ModalProvider>
            <Modal />
            <Main />
        </ModalProvider>
    )
}
