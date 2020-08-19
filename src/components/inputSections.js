import React, { Component } from 'react';
import './inputSections.css'

class InputSections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HOffset: 8,
            VOffset: 8,
            blur: 0,
            spread: 0,
            boxShadowColor: '#000000',
            canvasColor: '#a1a1a1',
            backgroundColor: 0,
            inset: false
        }
    }

    handleChange = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        // setTimeout(() => {
        console.log(this.state)
        this.props.boxShadow1(`${this.state.HOffset}px ${this.state.VOffset}px ${this.state.blur}px ${this.state.spread}px ${this.state.boxShadowColor} ${this.state.inset ? 'inset' : ''}`)
        console.log(this.state.inset)
        console.log(`${this.state.inset ? `true` : `false`}`)
        this.props.canvasBackgroundColor(this.state.backgroundColor)
        this.props.canvasColor(this.state.canvasColor)
        // }, 15)
    }

    render() {
        return (
            <div className="inputSections">
                <div className="inputSection">
                    <div className="inputTop">
                        <span>Horizontal Offset</span>
                        <input name="HOffset" type="number" value={this.state.HOffset} min="-200" max="200" onChange={this.handleChange} />
                    </div>
                    <input name="HOffset" type="range" value={this.state.HOffset} min="-200" max="200" onChange={this.handleChange} />
                </div>
                <div className="inputSection bottomBorder">
                    <div className="inputTop">
                        <span>Vertical Offset</span>
                        <input name="VOffset" type="number" value={this.state.VOffset} min="-200" max="200" onChange={this.handleChange} />
                    </div>
                    <input name="VOffset" type="range" value={this.state.VOffset} min="-200" max="200" onChange={this.handleChange} />
                </div>
                <div className="inputSection">
                    <div className="inputTop">
                        <span>Blur</span>
                        <input name="blur" type="number" value={this.state.blur} min="0" max="200" onChange={this.handleChange} />
                    </div>
                    <input name="blur" type="range" value={this.state.blur} min="-200" max="200" onChange={this.handleChange} />
                </div>
                <div className="inputSection bottomBorder">
                    <div className="inputTop">
                        <span>Spread</span>
                        <input name="spread" type="number" value={this.state.spread} min="-200" max="200" onChange={this.handleChange} />
                    </div>
                    <input name="spread" type="range" value={this.state.spread} min="-100" max="200" onChange={this.handleChange} />
                </div>
                <div className="inputTop">
                    <span>Box Shadow Color</span>
                    <input name="boxShadowColor" type="color" onChange={this.handleChange} />
                </div>
                <div className="inputTop bottomBorder">
                    <span>Inset/Outline</span>
                    <select name="inset" onChange={this.handleChange} value={this.state.inset}>
                        <option value="true">Inset</option>                    <option value="false" defaultValue>Outline</option>
                    </select>
                </div>
                <div className="inputTop">
                    <span>Background Color</span>
                    <input name="backgroundColor" type="color" onChange={this.handleChange} />
                </div>

                <div className="inputTop">
                    <span>Box Color</span>
                    <input name="canvasColor" value={this.state.canvasColor} type="color" onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default InputSections;