import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import TeacherStepsToSuccess from '../components/TeacherStepsToSuccess';
import ContentEditable from 'react-contenteditable';
import api from '../api'

class TeacherAbout extends React.Component {

	
	constructor(props) {
		super(props);
        console.log('TeacherAbout this.props: ', this.props)
        this.state = {
			stepsToSuccess: {0:"card", 1:"card", 2:"card", 3:"card", 4:"card", 5:"card", 6:"card", 7:"card", 8:"card", 9:"card", 10:"card"},
			html: `L.O. ${this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].lO}`,
			editedHtml: `L.O. ${this.props.searchResultReducer.result[this.props.stepIndexReducer.index.index].lO}`
        }
        this.toggleHighlight = this.toggleHighlight.bind(this);
        this.edit = this.edit.bind(this);
	}
	

    toggleHighlight(index,e) {
		this.setState({stepsToSuccess: {...this.state.stepsToSuccess, [index]: "card-highlighted",}})
	}
	
    edit(evt) {
		console.log('this.state.html', this.state.html)
        evt.target.value = ''
        this.setState({editedHtml: evt.target.value});
    }

    keyPress(event) {
        if(event.charCode == 13) {
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
			if (err) console.log('error: ',err);
			console.log('res',res);
			console.log('props.searchResultReducer.result',this.props.searchResultReducer.result)
			
			
			
			// extract id by passing down database index - need to put this in reducer - thought I'd done this, maybe didn't save??
			// create action which takes in id of LO clicked on from clicked on LO
			// create reducer to edit LO	


			// set the state with new edited LO
			// have option to revert to old LO
		  })
		
    }  
	// set the state with new edited LO
		// how to update just one entry in state - have I already done this but now
		// not updating database

	// have option to revert to old LO

	render () {
		let learningObj;
		let stepsToSuccess;

		{if (this.props.stepIndexReducer.index == null) {
			return (
				<div>
				<Link to={process.env.PUBLIC_URL}>
                    <button className="searchButton">Search</button>
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
				<Link to={process.env.PUBLIC_URL}>
                    <button className="searchButton">Search</button>
                </Link>
			<div className="centered">
			<ContentEditable className={`lO loResults`} onClick={this.edit} onKeyPress={this.keyPress.bind(this)} html={this.state.editedHtml} disabled={false}></ContentEditable>
			<div className="bar"></div>
			<br />
			<ul>
		
				{stepsToSuccess.map((step,index)=> {
			return <TeacherStepsToSuccess className={`steps ${this.state.stepsToSuccess[index]}`} onClick={index=>this.toggleHighlight(index)} step={step} index={index} />})}
				
			</ul>
			</div>
			</div>
		)
	}
}




export default connect(state => state)(TeacherAbout)