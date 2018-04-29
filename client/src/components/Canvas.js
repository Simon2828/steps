import React from 'react';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends React.Component {
    state = {
        // top: 198,
        // left: 320,
        color: "#ffc600",
        minWidth: '611px',
        minHeight: '480px',
    };
    render() {
        return (
            <CanvasDraw
                style={{
                    position: 'relative',
                    background: 'rgb(255, 255, 255, 0)',
                    display: 'inline-block',
                    margin: 0

                }}
                brushColor={this.state.color}
                canvasWidth={this.state.minWidth}
                canvasHeight={this.state.minHeight}>
            </CanvasDraw>
        )

    }
}

