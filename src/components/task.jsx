//snippets imr
import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';


//snippets sfc

/*
const Task = ({ task }) => {
    return ( 
        <h1>{task.title}</h1>
     );
}

export default Task;
*/

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskDelete}) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    }


    return (
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                <button className='see-task-details-button' onClick={() => handleTaskDetailsClick()}>
                    <CgInfo />
                </button>
                </button>

            </div>
        </div>
   );

}
 
export default Task;