import React, { useState, useEffect } from "react";
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'; //uuid gerador de id aleatório

import Tasks from "./Tasks";
import AddTask from "./Addtask";


const Base = () => {

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

    useEffect(() => {

        const fetchTasks = async () => {
            const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
            
            setTasks(data);
        };

        fetchTasks();

    }, []); //renderização inicial

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tasks,
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
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed}

            return task;
            });
        
        setTasks(newTasks);
    };

    const handleTaskDelete = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks);
    };
        

return (<>
    <AddTask handleTaskAddition={handleTaskAddition}/>
    <Tasks tasks = {tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
 </>  );
}

export default Base;