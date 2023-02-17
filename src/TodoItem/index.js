import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare, faSquareCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
function TodoItem(props) {
    return (
        <>
            <li className="TodoItem">
                <span onClick={props.onComplete} className="Icon Icon-completed">
                    {
                        props.completed? 
                        <FontAwesomeIcon icon={faSquareCheck} />
                        :
                        <FontAwesomeIcon icon={faSquare} />
                    }
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>
                <span onClick={props.onDelete} className="Icon Icon-delete">
                    <FontAwesomeIcon icon={faTrash} />    
                </span>
            </li>
        </>
    )
}

export {TodoItem};