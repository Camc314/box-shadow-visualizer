import React, { Component } from 'react';
import './App.css';
import InputSections from './components/inputSections'
import RenderCanvas from './components/renderCanvas'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxShadowData: String,
            canvasBackgroundColor: String,
            canvasColor: String
        }
    }
    updateBoxShadow = (data) => {
        console.log(data);
        this.setState({
            boxShadowData: data
        })
    }

    updateBackgroundColor = (data) => {
        console.log(data);
        this.setState({
            canvasBackgroundColor: data
        })
    }

    updateCanvasColor = (data) => {
        console.log(data);
        this.setState({
            canvasColor: data
        })
    }

    componentDidMount = () => {
        this.setState({
            boxShadowData: '8px 8px 0px 0px'
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Box-Shadow Simulator</h2>
                </header>
                <div className="contentContainer">
                <InputSections boxShadow1={this.updateBoxShadow} canvasBackgroundColor={this.updateBackgroundColor} canvasColor={this.updateCanvasColor} />
                <RenderCanvas boxShadow={this.state.boxShadowData} canvasBackgroundColor={this.state.canvasBackgroundColor} canvasColor={this.state.canvasColor} />
                </div>
                <footer>
                    <h4>This is a simple personal project to dynamically simulate box-shadow effects on an object based on a user's input.</h4>
                    <p>Built Using React</p>
                    <h4>Look at my other projects on GitHub <a href="https://github.com/camc314" target="_blank" rel="noopener noreferrer">here</a></h4>
                </footer>
            </div>
        )
    };
}

export default App;
