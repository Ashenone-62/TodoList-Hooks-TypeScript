import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

interface IProps {
    isShowModal: boolean;
    modalTitle: string;
    children: ReactNode[];
}

const Modal: FC<IProps> = ({ 
    isShowModal, 
    modalTitle, 
    children 
}): ReactElement => {

    return (
        <>
        {
            isShowModal
            ?
            (
                <div className="modal">
                    <div className="inner">
                        <div className="m-header">{ modalTitle }</div>
                        <div className="content-wrapper">{ children }</div>
                    </div>
                </div>
            )
            :
            ('')
        }
        </>
    )
}

export default Modal