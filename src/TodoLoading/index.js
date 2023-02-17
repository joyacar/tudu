import './TodoLoading.css';

const TodoLoading = (props) => (
    <>
        <div className='contenedor-img-loading'>
            <img className='img-loading' src="/Images/loading.gif" alt="cargando..." />
        </div>
        <h4 className='loading'>Cargando...</h4>
    </>
)

export {TodoLoading};