import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';

class About extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
			stepsToSuccess: {0:"card", 1:"card", 2:"card", 3:"card", 4:"card", 5:"card", 6:"card", 7:"card", 8:"card", 9:"card", 10:"card"}
        }
        this.toggleHighlight = this.toggleHighlight.bind(this);
	}
	

	// state highlighted: [{highlighted: index},]
//  setState by index using ternary operator below l23
// map over state in method to return classNames...??

    toggleHighlight(index,e) {
		console.log('index in togglehighlight',index)
		// toggle but not working right:
		// this.state.highlighted === index ? this.setState({ highlighted: false }) : this.setState({highlighted: index});
		// let activeIndex = this.state.activeIndex === index ? null : index;
		// this.setState({activeIndex});
		this.setState({stepsToSuccess: {...this.state.stepsToSuccess, [index]: "card-highlighted",}})
		console.log(this.state.stepsToSuccess)
	}
	


	render () {
		let learningObj;
		let stepsToSuccess;
		// let className = 'card' + (this.state.highlighted ? '-highlighted' : '');

		{if (this.props.stepIndexReducer.index == null) {
			return (
				<div>
				<Link to="/">
                    <button>Search</button>
                </Link>
			</div>
			)
		}
			
		else if (this.props.stepIndexReducer.index.index !== null) {
			learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].lO}
			stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].stepsToSuccess

		}
		return (
			<div>
				<Link to="/">
                    <button>Search</button>
                </Link>
			<div className="centered">
			<h2 className={`lO loResults`}>L.O. {learningObj}.</h2>
			<div className="bar"></div>
			<br />
			<ul>
		
				{stepsToSuccess.map((step,index)=> {
			return <StepsToSuccess className={`steps ${this.state.stepsToSuccess[index]}`} onClick={index=>this.toggleHighlight(index)} step={step} index={index} />})}
				
			</ul>
			</div>
			</div>
		)
	}
}




export default connect(state => state)(About)