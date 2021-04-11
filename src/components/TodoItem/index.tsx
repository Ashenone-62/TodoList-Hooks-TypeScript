import React, { FC, ReactElement } from 'react';
import { ITodo } from '../../typings';

import './index.scss';

interface IProps {
    data: ITodo;
    openCheckModal: (id: number) => void;
    openEditModal: (id: number) => void; 
    completeItem: (id: number) => void; 
    removeItem: (id: number) => void;
}

const TodoItem: FC<IProps> = ({
    data, 
    openCheckModal, 
    openEditModal, 
    completeItem, 
    removeItem
}): ReactElement => {
    
    return (
        <li className="todo-item">

            <div className="check-box">
                <input type="checkbox" 
                    checked={ data.completed } 
                    onChange={ ()=>{ completeItem(data.id) } }  
                />
            </div>

            <span 
                className="content" 
                style={ { 'textDecoration': data.completed ? 'line-through' : 'none' } } 
            >
                { data.content }
            </span>

            <div className="btn-group">
                <button className="btn btn-primary" onClick={ ()=>{ openCheckModal(data.id) } }>查看</button>
                <button className="btn btn-warning" onClick={ ()=>{ openEditModal(data.id) } }>编辑</button>
                <button className="btn btn-danger" onClick={ ()=>{ removeItem(data.id) } } >删除</button>
            </div>
        </li>
    );
}

export default TodoItem