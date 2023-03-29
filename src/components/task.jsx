//snippets imr
import React from 'react';

//snippets sfc

/*
const Task = ({ task }) => {
    return ( 
        <h1>{task.title}</h1>
     );
}

export default Task;
*/

import "./task.css"

const Task = ({ task }) => {
    return ( 
        <div className="task-container">
            {task.title}
        </div> 
    );
}
 
export default Task;