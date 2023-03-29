import React from 'react';

import "./addtask.css";
import Button from './button';

const AddTask = () => {
    return ( 
            
            <div class="addtask-container">
                <input class="addtask-input" type="text"></input>
                <div className="add-button-container"><Button>Adicionar</Button></div>
                
            </div>
        );
}
 
export default AddTask;
<input></input>