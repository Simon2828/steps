import React, { Component } from 'react';
import Camera from 'react-camera';
import { Link } from 'react-router-dom';


export default class Cam extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
        this.state = {
            blob: ''
        }

    }

    takePicture() {
        console.log('here')
        this.camera.capture()
            .then(blob => {
                this.img.src = URL.createObjectURL(blob);
                console.log('this.img.src', this.img.src)
                this.setState({blob: this.img.src})
                this.img.onload = () => { URL.revokeObjectURL(this.src); }
            })
    }

    render() {
        return (
            <div style={style.container}>
                <Camera
                    style={style.preview}
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                >
                    <div style={style.captureContainer} onClick={this.takePicture}>
                        <div style={style.captureButton} />
                    </div>
                </Camera>
                <Link to={{pathname: process.env.PUBLIC_URL + '/writing', state: {blob:this.state.blob}}}>
                    <img
                        style={style.captureImage}
                        ref={(img) => {
                            this.img = img;
                        }}

                    />
                </Link>
            </div>
        );
    }
}

const style = {
    preview: {
        position: 'relative',
    },
    captureContainer: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 1,
        bottom: 0,
        width: '100%'
    },
    captureButton: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        height: 56,
        width: 56,
        color: '#000',
        margin: 20
    },
    captureImage: {
        width: '100%',
    }
};