import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const {addTodos,setOpenModal} = React.useContext(TodoContext);
    const [textTodo, setTextTodo ] = React.useState('');
    const onCancel = () => {
        setOpenModal(false);
        setTextTodo('');
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(textTodo);
        setOpenModal(false);
        setTextTodo('');
    }
    const handleChangeTextarea = (event) => {
        setTextTodo(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <label >Escribe tu nueva tarea</label>
            <textarea value={textTodo} onChange={handleChangeTextarea} placeholder='Escribe aquí...'></textarea>
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className='TodoForm-button TodoForm-button-cancel'
                    onClick={onCancel} 
                >Cancelar</button>
                <button
                    className='TodoForm-button TodoForm-button-add'
                    type="submit"
                >Añadir Tarea</button>
            </div>
        </form>
    )
}

export {TodoForm};