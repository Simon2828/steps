import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {setSearchResult} from '../actions/searchResult';
import {setStepIndex} from '../actions/stepIndex';
import {Link} from 'react-router-dom';
import TargetsApi from '../targetsApi';
import Fuse from 'fuse.js';
import LoResults from '../components/LoResults';

let options = {
    keys: ['lO', 'stepsToSuccess']
  };
  let fuse = new Fuse(TargetsApi, options)

class App extends Component {

	_onChange = (value) => {
		this.props.dispatch(setMessage(value))
    }
    
    _fuseSearch = (value) => {
        let fuseSearchResult = fuse.search(value);
        this.props.dispatch(setSearchResult(fuseSearchResult));
    }

    _loClicked = (index) => {
        this.props.dispatch(setStepIndex(index));
    }

    render () {

        const {message} = this.props.messageReducer;
        const {result} = this.props.searchResultReducer;


        return (
        	<div>
                <InputPreview
                    value={message}
                    onChange={(value)=>{this._onChange(value);this._fuseSearch(value)}}/>
                <LoResults result={result} onClick={(index)=>{this._loClicked(index)}}/>
            </div>
        )
    }
}

export default connect(state => state)(App);