import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TeacherStepsToSuccess from '../components/TeacherStepsToSuccess';
import ContentEditable from 'react-contenteditable';
import api from '../api';
import { editLo } from '../actions/editLo';
import { editStep } from '../actions/editStep';

class TeacherAbout extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			stepsToSuccess: { 0: "card", 1: "card", 2: "card", 3: "card", 4: "card", 5: "card", 6: "card", 7: "card", 8: "card", 9: "card", 10: "card" },
			html: `L.O. ${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`,
			editedHtml: `L.O. ${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`
		}
		this.toggleHighlight = this.toggleHighlight.bind(this);
		this.edit = this.edit.bind(this);
	}

	edit(evt) {
		evt.target.value = `L.O. ${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`
		this.setState({ editedHtml: evt.target.value });
		
		evt.target.onfocus = function(e) {
			var el = this;
			requestAnimationFrame(function() {
				selectElementContents(el);
			});
		};
	function selectElementContents(el) {
			var range = document.createRange();
			range.selectNodeContents(el);
			var sel = window.getSelection();
			range.setStart(sel.anchorNode,0);
			sel.removeAllRanges();
			sel.addRange(range);
	}
	}

	keyPress(event) {
		if (event.charCode == 13) {
			let elem = document.querySelector('.lO.loResults')
			elem.blur();
			event.preventDefault();
			let stepIndex = this.props.stepIndexReducer.index;
			this.addEditedLo(this.state.html, elem.textContent, stepIndex);
		}
	}
	//stepIndex below is not being used
	addEditedLo = (originalLO, loValue, stepIndex) => {
		return api.editLo(originalLO, loValue, stepIndex)
			.end((err, res) => {
				if (err) console.log('error: ', err);
				this.props.dispatch(editLo(loValue, stepIndex))

			})

	}

	// have option to revert to old LO?

	addEditedStep = (originalStep, stepValue, stepIndex) => {
		return api.editLo(originalStep, stepValue, stepIndex)
			.end((err, res) => {
				if (err) console.log('error: ', err);
				this.props.dispatch(editStep(stepValue, stepIndex))
				// need to make editStep action
			})
	};

	stepKeyPress() {
		console.log('here in stepKeyPress');
	}

	render() {
		let learningObj;
		let stepsToSuccess;

		{
			if (this.props.stepIndexReducer.index == null) {
				return (
					<div>
						<Link to={process.env.PUBLIC_URL}>
							<button className="searchButton">Search</button>
						</Link>
					</div>
				)
			}

			else if (this.props.stepIndexReducer.orderOfResultsIndex !== null) {
				learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO
			}
			stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].stepsToSuccess

		}

		return (
			<div>
				<Link to={process.env.PUBLIC_URL}>
					<button className="searchButton">Search</button>
				</Link>
				<div className="centered">
					<ContentEditable className={`lO loResults`} onFocus={this.edit} onKeyPress={this.keyPress.bind(this)} html={this.state.editedHtml} disabled={false}></ContentEditable>
					<div className="bar"></div>
					<br />
					<ul>

						{stepsToSuccess.map((step, index) => {
							return <TeacherStepsToSuccess className={`steps ${this.state.stepsToSuccess[index]}`} onClick={(start,end) => this.setSelectionRange(start,end)} step={step} index={index}
							onKeyPress={this.stepKeyPress} />
						})}

					</ul>
				</div>
			</div >
		)
	}
}




export default connect(state => state)(TeacherAbout)