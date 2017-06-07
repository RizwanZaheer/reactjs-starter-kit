import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import store from './stores/store';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';

// Css Files
import '../public/css/style.css';


/*const store = configureStore()*/
//const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Root store={store} history={hashHistory} />,
	document.getElementById('app')
);
