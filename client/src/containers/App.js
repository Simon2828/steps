import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {setSearchResult} from '../actions/searchResult';
import {setStepIndex} from '../actions/stepIndex';
import {clearMessage} from '../actions/clearMessage';
import {clearSearchResult} from '../actions/clearSearchResult';
import {storelOsAndSteps} from '../actions/lOsAndSteps';
import {Link} from 'react-router-dom';
import TargetsApi from '../targetsApi';
import Fuse from 'fuse.js';
import LoResults from '../components/LoResults';
import api from '../api';

let fuse;

class App extends Component {
    
    componentDidMount() {
        this._fetchAllLos();
    }
    
    _fetchAllLos = () => {
        api.getAllLos()
        .then(res => {
            return res.body.map((obj, index) => {
                let s2s = obj.stepsToSuccess.split(',');
                function uniqueSteps(arr) {return [...new Set(arr)]};
                return {lO:obj.lO, stepsToSuccess: uniqueSteps(s2s), index};
            })
            
        })
        .then(res=> this._storelOsAndSteps(res))
        .catch(console.error)
    }
    
	_onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }
    
    _fuseSearch = (value) => {
        let elOflOsAndStepsReducerArray = this.props.lOsAndStepsReducer.length-1
        let options = {
            keys: ['lO', 'stepsToSuccess']
          };
        fuse = new Fuse(this.props.lOsAndStepsReducer[elOflOsAndStepsReducerArray], options)
        console.log('fuse', fuse)
        let fuseSearchResult = fuse.search(value);
        this.props.dispatch(setSearchResult(fuseSearchResult));
    }

    _loClicked = (index) => {
        this.props.dispatch(setStepIndex(index));
        this.props.dispatch(clearMessage());
    }

    _storelOsAndSteps = (data) => {
        this.props.dispatch(storelOsAndSteps(data))
    }

    render () {

        const {message} = this.props.messageReducer;
        const {result} = this.props.searchResultReducer;

        return (
        	<div>
                <Link to={process.env.PUBLIC_URL + '/teacher'}><button className="button--teacher-login">Teacher login</button></Link>
                <InputPreview
                    value={message}
                    onChange={(value)=>{this._onChange(value);this._fuseSearch(value)}}/>
                <LoResults className="loResults" result={result} onClick={(index)=>{this._loClicked(index)}}/>  
            </div>
        )
    }
}

export default connect(state => state)(App);