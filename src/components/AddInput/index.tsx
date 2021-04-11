import React, { useRef, FC, ReactElement } from 'react';

import './index.scss';

interface IProps {
    isInputShow: boolean;
    addItem: (value: string) => void
}

const AddInput: FC<IProps> = ({
    isInputShow, addItem
}): ReactElement => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    const submitValue = (): void => {
        const inputValue: string = inputRef.current!.value.trim();

        if(inputValue.length === 0) {
            return
        }else {
            addItem(inputValue)
            inputRef.current!.value = "";
        }
    }
    
    return (
        <>
            {
                isInputShow
                ?
                (
                    <div className="input-wrapper">
                        <input type="text" placeholder="请输入待办事件" ref={ inputRef }  />
                        <button className="btn btn-primary" onClick={ submitValue }>添加</button>
                    </div>
                )
                :
                (
                    ""
                )
            }
        </>
    );
}

export default AddInput;