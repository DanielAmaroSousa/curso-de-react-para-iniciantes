import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'; //uuid gerador de id aleatório

import Tasks from "./components/tasks";
import AddTask from "./components/addtask";

import "./App.css";

const App = () => {
    //let message = "Hello World";
    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: "Estudar Programação",
            completed: false, 
        },
        {
            id: "2",
            title: "Ler Livros",
            completed: true, 
        }, 
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [... tasks,
        {
            title: taskTitle,
            //id: Math.random(10),
            id: uuidv4(),
            completed: false,
        },
        ];

        setTasks(newTasks);
    }

    const handleTaskClick = (taskId) => {
        
    }


    return (
    <>
        <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks = {tasks}/>
        </div>
        
    </>
    
    );
};

export default App;