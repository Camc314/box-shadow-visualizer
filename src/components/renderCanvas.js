import React, { Component } from 'react';
import '../components/canvas.css';

class RenderCanvas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HOffset: 0,
            VOffset: 0,
            blur: 0,
            spread: 0
        }
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
            <div className="canvasContainer" style={{backgroundColor: this.props.canvasBackgroundColor}}>
                <div className="canvas" style={{ boxShadow: this.props.boxShadow, backgroundColor: this.props.canvasColor}}>

                </div>
            </div>
            <p>box-shadow: {this.props.boxShadow}</p>
            </div>
        )
    }
}

export default RenderCanvas;