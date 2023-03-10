import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
      
      const [openModal,setOpenModal] = React.useState(false);

      const [searchValue,setSearchValue] = React.useState('');
      
      const completedTodos = todos.filter(x => !!x.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue > 0){
        searchedTodos = todos;
      } else{
        searchedTodos = todos.filter(x => {
          const todoText = x.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text
        });
        saveTodos(newTodos);
      }
    
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }
      return (
       <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        addTodos,
        deleteTodos,
        openModal,
        setOpenModal,
       }}>
        {props.children}
       </TodoContext.Provider> 
    )
}

export {TodoContext,TodoProvider};