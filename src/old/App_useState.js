import React, { useState } from "react";
import "./App.css";

const App = () => {
    //let message = "Hello World";
    const [message, setMessage] = useState("hello");

    return (
    <>
        <div className="container">{message}</div>
        <button onClick={() => {setMessage("mensagem alterada")}}>mudar mensagem</button>
    </>
    
    );
};

export default App;