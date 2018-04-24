import React from 'react';
import Canvas from '../components/Canvas';
import { connect } from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';




class Writing extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let blob = this.props.image;
        let learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].lO;
        let stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess;

        // problem: image is set as background so not responsive / it is differnt to Camera.js component which
        // is set with img src... needs to be background image because of Canvas drawing although could try
        // z-index setting..
        return (
            <div>
                            <h2 className={`lO loResults`}>L.O. {learningObj}</h2>

                <div className='container' style={{
                    background: `url(${blob})center center no-repeat fixed`,
                    position: 'relative',
                    margin: '0 auto',
                    height: '100vh',
                    textAlign: 'center',
                    overflow: 'hidden',
                    maxWidth: '178vh'
                }} >
                    <Canvas className='canvas' />
                </div>
				{stepsToSuccess.map((step,index)=> {
			return (
                <div>
            <div>hi</div>
                    <div>hi 2</div>
                    </div>
            )
                })}

            </div>
        )
    }
}

export default connect(state => state)(Writing);