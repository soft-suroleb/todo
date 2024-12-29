import { useContext } from "react";
import { ModalContextType, ModalContext } from "../components/contexts/modal";

export const useModal = (): ModalContextType => useContext(ModalContext); 
