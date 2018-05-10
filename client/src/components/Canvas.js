import React from 'react';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import {connect} from 'react-redux';


class Canvas extends React.Component {
    state = {
        // top: 198,
        // left: 320,
        // color: `${this.props.color}`,
        minWidth: '611px',
        minHeight: '480px',
    };
    render() {
        console.log('this.props.color', this.props.color )
        return (
            <CanvasDraw
                style={{
                    position: 'relative',
                    background: 'rgb(255, 255, 255, 0)',
                    display: 'inline-block',
                    margin: 0

                }}
                brushColor={this.props.color}
                canvasWidth={this.state.minWidth}
                canvasHeight={this.state.minHeight}>
            </CanvasDraw>
        )

    }
}

export default connect(state => state)(Canvas);