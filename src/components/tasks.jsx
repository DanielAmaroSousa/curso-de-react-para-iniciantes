import React from "react";

import Task from "./task";

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

const Tasks = ( {tasks} ) => {
    return ( 
    <>
        {tasks.map((task) => <Task task = {task} />)}

    </> );
}
 
export default Tasks;