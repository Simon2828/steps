import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import TeacherAbout from './containers/TeacherAbout';
import Teacher from './containers/Teacher';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
				<Route path={process.env.PUBLIC_URL + '/teacher/steps-to-success'} component={TeacherAbout}/>
				<Route path={process.env.PUBLIC_URL + '/teacher'} component={Teacher} />
			  <Route path={process.env.PUBLIC_URL + '/steps-to-success'} component={About}/>
			</Switch>
		</BrowserRouter>
	)
}