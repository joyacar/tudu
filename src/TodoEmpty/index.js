import './TodoEmpty.css';

const TodoEmpty = () => (
    <>
        <div className='contenedor-img'>
            <img className='img-empty' src="/Images/empty.png" alt="imagen tareas vacias" />
        </div>
        <h4>Comienza a escribir tus primeras tareas!</h4>
        
    </>
)

export {TodoEmpty};