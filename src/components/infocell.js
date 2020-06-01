import React, { Component } from 'react'
import './infocell.css'

export class Infocell extends Component {
    render() {
        return (
            <div className='cell' >
                <center><h3>{this.props.title}</h3></center>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Infocell;