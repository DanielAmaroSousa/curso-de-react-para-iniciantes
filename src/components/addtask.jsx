import React, { useState } from 'react';

import "./addtask.css";
import Button from './button';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return ( 
            
            <div class="addtask-container">
                <input  onChange={handleInputChange} 
                        value={inputData}   
                        className="addtask-input" 
                        type="text">
                </input>
                <div className="add-button-container">
                    <Button onClick={handleAddTaskClick} >Adicionar</Button>
                </div>
                
            </div>
        );
};
 
export default AddTask;
<input></input>