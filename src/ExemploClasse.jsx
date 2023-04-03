import React from 'react';
import Button from './components/Button';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            message: "hello world",
        };
    }
    
    componentDidMount() {
        console.log("componente renderizado pela primeira vez");
    }

    handleMessageChangeClick() {
        this.setState({message: "hello"})
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleMessageChangeClick.bind(this)}>mudar mensagem</button>
            </>
        )
    }
}

export default App;