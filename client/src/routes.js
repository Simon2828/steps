import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';

export default () => {
	console.log('process.env.PUBLIC_URL:', process.env.PUBLIC_URL)
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
			  <Route path={process.env.PUBLIC_URL + '/steps-to-success'} component={About}/>
			</Switch>
		</BrowserRouter>
	)
}