import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import Base from "./components/Base";

import "./App.css";


const App = () => {
 
    return (
    <Router>
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" 
                    exact //se não colocar o exact ele pega toda a path que contenha "/"
                    element={<Base/>}/>
                <Route path="/:taskTitle" exact element={<TaskDetails/>} />
            </Routes>
              
        </div>
        
    </Router>
    
    );
};

export default App;