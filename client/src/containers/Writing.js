import React from 'react';
import Canvas from '../components/Canvas';
import { connect } from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';
import PaintStepsToSuccess from '../components/PaintStepsToSuccess';
import {changeColor} from '../actions/changeColor';



class Writing extends React.Component {
    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor (index,e ) {
        const styleColor = window.getComputedStyle(e.target, null).getPropertyValue("color");
        console.log('styleColor', styleColor)
        this.props.dispatch(changeColor(styleColor));

        // import actions etc. to changeColor..
        // in canvas set colorChange using redux props
        

    }

    render() {
        let blob = this.props.image;
        console.log('blob', blob)
        let stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess;

        return (
            <div>
                <div className='container' style={{
                    display: 'block',
                    background: `url(${blob})top center no-repeat fixed`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    margin: '-0 auto',
                    padding: '0',
                    height: '70vh',
                    textAlign: 'center',
                    overflow: 'hidden',
                    maxWidth: '178vh'
                }} >
                    <Canvas className='canvas' />
                    </div>
                {stepsToSuccess.map((step, index) => {
                    return (
                        <PaintStepsToSuccess stepsToSuccess={step} color={this.props.color} index={index} onClick={(e)=>this.changeColor(index,e)}/>
                    )
                })}

            </div>
        )
    }
}

export default connect(state => state)(Writing);


// color of paintstepstosuccess done by index and css
// move color prop to canvas paint color
// think of ui to show this