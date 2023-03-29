import React, { useState } from "react";

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

    return (
    <>
        <div className="container">
            <AddTask></AddTask>
            <Tasks tasks = {tasks}></Tasks>
        </div>
        
    </>
    
    );
};

export default App;