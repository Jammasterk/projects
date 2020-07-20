import React, { Component } from 'react'
import Grid from "./Grid"
import "./index.css"

export class App extends Component {

    constructor(){
        super()
        this.speed = 100;
        this.rows = 30;
        this.cols = 50

        this.state = {
            generations: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    render() {
        return (
            <div>
                <h1>The Game of life</h1>
                <Grid 
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generations}</h2>
            </div>
        )
    }
}

export default App

