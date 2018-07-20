import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from "aws-amplify";
import config from './config'


import { Provider } from 'react-redux';

// main routes
import AppRoutes from './routes';

import store from './store';

Amplify.configure({
	API: {
		endpoints: [
			{
				name: "peermarkit",
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			},
		]
	}
});

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
