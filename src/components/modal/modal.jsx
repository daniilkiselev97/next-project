import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css';
import  ReactDOM  from 'react-dom';
const Modal = ({ children, isOpen, onClose }) => {
    if (isOpen) {
        return ReactDOM.createPortal(
            <div onClick={onClose} className={styles.background}>
                <div onClick={(e)=>{e.stopPropagation()}} className={styles.modal_wraper}>{children}</div>
            </div>,
            document.querySelector('#modal')
        );
    }
};

export default Modal;
