// eslint-disable-next-line no-unused-vars
import React from 'react';

// CSS
import '../../css/modal.css';

// eslint-disable-next-line react/prop-types
const Modal = ({ children }) => {
    return (
        <div className='modal__container'>
            <div className='modal__content '>

                {children}

                
            </div>
            
        </div>
    );
};

export default Modal;
