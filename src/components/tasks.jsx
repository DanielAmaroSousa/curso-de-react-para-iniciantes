import React from "react";

import Task from "./Task";

/*
const Tasks = (props) => {
    console.log(props);
    
    return (
        
        <div>
            Tasks
        </div>
    )
};
*/

const Tasks = ( {tasks, handleTaskClick, handleTaskDelete} ) => {
    return ( 
    <>
        {tasks.map((task) => <Task 
            key={task.id} //ajuda o react a identificar cada componente renderizado (boa prática qdo utilizamos o map)
            task = {task} 
            handleTaskClick={handleTaskClick} 
            handleTaskDelete={handleTaskDelete}
    />)};

    </> );
}
 
export default Tasks;