import React, { useState, useCallback, useEffect, FC, ReactElement } from 'react';

import Header from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import NoTodoList from './components/NoTodoList';

import './App.css';
import { ITodo } from './typings';

const  App: FC = (): ReactElement => {

  const [ isInputShow, setInputShow ] = useState<boolean>(false);
  const [ todoList, setTodoList ] = useState<ITodo[]>([]);
  const [ isShowCheckModal, setShowCheckModal ] = useState<boolean>(false);
  const [ isShowEditModal, setShowEditModal] = useState<boolean>(false);
  const [ currentData, setCurrentData ] = useState<ITodo>({
    id: 0,
    content: "",
    completed: false
  });

  useEffect(() => {

    const todoData: ITodo[] = JSON.parse(localStorage.getItem('todoData') || '[]')
    setTodoList(todoData)
  }, []);

  useEffect(() => {

    localStorage.setItem('todoData', JSON.stringify(todoList));
  }, [ todoList ]);


  const addItem = useCallback((value: string): void => {

    const dataItem: ITodo = {
      id: new Date().getTime(),
      content: value,
      completed: false
    };
    setTodoList(( todoList: ITodo[] ) => [ ...todoList, dataItem ]);
    setInputShow(false);
  }, []);


  const completeItem = useCallback((id: number): void => {

    setTodoList((todoList) => {
      
      return todoList.map((item) => {
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item;
      })
    })
  }, [])

  const removeItem = useCallback((id: number): void => {
 
    setTodoList((todoList) => {
      
      return todoList.filter((item) => {
        return item.id !== id;
      })
    })
  }, [])

  const openCheckModal = useCallback((id: number): void => {
    
    setCurrentData(() => {
      return todoList.filter(item => item.id === id)[0];
    })
    setShowCheckModal(true);
  }, [todoList])

  const openEditModal = useCallback((id: number): void => {
    
    setCurrentData(() => {
      return todoList.filter(item => item.id === id)[0]
    });
    setShowEditModal(true);
  }, [todoList])

  const sumbitEdit = useCallback((newData: ITodo, id: number): void => {

    setTodoList((todoList) => {
      
      return todoList.map((item) => {
        if(item.id === id){
          item = newData;
        }

        return item;
      })
    })
    setShowEditModal(false);
  }, [])

  return (
    <div className="App">

      <CheckModal 
        isShowCheckModal={ isShowCheckModal } 
        closeModal={ ()=>{ setShowCheckModal(false) } } 
        data={ currentData } 
      />

      <EditModal 
        isShowEditModal={ isShowEditModal } 
        data={ currentData } 
        sumbitEdit={ sumbitEdit } 
      />

      
      <Header openInput={ () => { setInputShow(!isInputShow) } } />

      <AddInput  
        isInputShow={ isInputShow } 
        addItem={ (value) => { addItem(value) } }  
      />

      {  
        !todoList || todoList.length === 0
        ?
        (<NoTodoList />)
        :
        (<ul className="todo-list">
          { 
            todoList.map((item,index) => {
  
              return (
                <TodoItem 
                  data={ item } 
                  key={ index } 
                  openCheckModal={ openCheckModal } 
                  openEditModal={ openEditModal } 
                  completeItem={ completeItem } 
                  removeItem={ removeItem } 
                />
              );
            })
          }
        </ul>)
      }
    </div>
  );
}

export default App;
