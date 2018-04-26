import React from 'react';
import Canvas from '../components/Canvas';
import { connect } from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';
import PaintStepsToSuccess from '../components/PaintStepsToSuccess';




class Writing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let blob = this.props.image;
        let stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess;

        return (
            <div>
                <div className='container' style={{
                    display: 'block',
                    background: `url(${blob})center center no-repeat fixed`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    margin: '0 auto',
                    padding: '0',
                    height: '100vh',
                    textAlign: 'center',
                    overflow: 'hidden',
                    maxWidth: '178vh'
                }} >
                    <Canvas className='canvas' />
                {stepsToSuccess.map((step, index) => {
                    return (
                        <PaintStepsToSuccess stepsToSuccess={step}/>
                    )
                })}
                </div>

            </div>
        )
    }
}

export default connect(state => state)(Writing);