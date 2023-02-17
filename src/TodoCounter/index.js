import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter" >&#128209; Haz completado {completedTodos} de {totalTodos} tareas &#128218;</h2>
    )
}

export {TodoCounter};