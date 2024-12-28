import { useContext } from "react";
import { ModalContextType, ModalContext } from "../contexts/modal";

export const useModal = (): ModalContextType => useContext(ModalContext); 
