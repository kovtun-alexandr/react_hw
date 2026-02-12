import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css'

export function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;
    return createPortal(
        <div className={styles["modal-overlay"]} onClick={onClose}>
            <div
                className={styles["modal-content"]}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}