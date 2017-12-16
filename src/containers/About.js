import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class About extends React.Component {

	render () {
		let learningObj;
		let stepsToSuccess;
		console.log('props in about:', this.props)

		{if (this.props.stepIndexReducer.index == null) {
			return (
				<div>
				<Link to="/">
                    <button>Go Home</button>
                </Link>
			</div>
			)
		}
			
		else if (this.props.stepIndexReducer.index.index !== null) {
			learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].lO}
			stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].stepsToSuccess.
			map(s2s=><li>{s2s}</li>)
			console.log('stepsToSuccess::', stepsToSuccess)
		}
		return (
			<div>
				<Link to="/">
                    <button>Go Home</button>
                </Link>
			<h2>{learningObj}</h2>
			<ul>{stepsToSuccess}</ul>
			</div>
		)
	}
}

export default connect(state => state)(About)