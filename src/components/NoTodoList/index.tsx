import React, { FC, ReactElement } from 'react';

import './index.scss';

const NoTodoList: FC = (): ReactElement => {
    
    return (
        <div className="nodatatip-wrapper">
            <span>
                您还没有待办事项
            </span>
        </div>
    )
}

export default NoTodoList