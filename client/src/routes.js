import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import TeacherAbout from './containers/TeacherAbout';
import Teacher from './containers/Teacher';
import Callback from './components/Callback';
import Auth from './Auth/Auth';
import history from './Auth/history';

const auth = new Auth();
console.log('auth', auth)


const handleAuthentication = (nextState, replace) => {
	console.log('nextState', nextState)
	console.log('replace', replace)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}



export default () => {
	return (
		<BrowserRouter >
			<Switch>
			  <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
				<Route path={process.env.PUBLIC_URL + "/callback"} render={(props) => {
					console.log('props::', props)
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
				<Route path={process.env.PUBLIC_URL + '/teacher/steps-to-success'} component={TeacherAbout}/>
				<Route path={process.env.PUBLIC_URL + '/teacher'} component={Teacher} />} />
			  <Route path={process.env.PUBLIC_URL + '/steps-to-success'} component={About}/>
			</Switch>
		</BrowserRouter>
	)
}