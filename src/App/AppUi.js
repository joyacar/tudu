import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
function AppUi (){

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter/>    
            <TodoSearch/>
            <TodoList>
                {error && <p>ha ocurrido un error...</p>}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <TodoEmpty />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={()=> completeTodos(todo.text)}
                    onDelete={()=> deleteTodos(todo.text)}
                />
                ))}
            </TodoList>
            {
                !!openModal && 
                <Modal>
                    <TodoForm />
                </Modal>
            }
            <CreateTodoButton setOpenModal={setOpenModal}/>
        </>
    )

}

export {AppUi}