import React,{Component} from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
import Client from '../components/Client.js';

// views
import Home from '../views/Home.js';

import { Route, Router, browserHistory, IndexRedirect, IndexRoute} from 'react-router';

class CustomRouter extends Component{
	render(){
		return (
			<Router history={this.props.history}>
				<Route path={"/"} component={Blank}>
			     	<IndexRoute component={Home}/>
					<Route path={"client"} component={Client}>
				    </Route>
			    </Route>
			</Router>
		);

	}
}

export default CustomRouter;
