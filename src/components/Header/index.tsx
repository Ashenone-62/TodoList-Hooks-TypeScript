import React, { FC, ReactElement } from 'react';

import './index.scss';

interface IProps {
    openInput: () => void;
}

const Header: FC<IProps> = ({
    openInput
}): ReactElement => {

    return (
        <div className="header">
            <h1>TodoList-React Hooks</h1>
        
            <span className="icon" onClick={ openInput }>
                &#43;
            </span>
        </div>
    );
}

export default Header;