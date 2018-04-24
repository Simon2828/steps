import React from 'react';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends React.Component {
    state = {
        color: "#ffc600",
        width: 400,
        height: 400
      };
    render() {
        return (
            <CanvasDraw
            style={{background: 'rgb(255, 255, 255, 0)'}}
            brushColor={this.state.color}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}>
            <div>hi</div>
            </CanvasDraw>
        )

    }
}

