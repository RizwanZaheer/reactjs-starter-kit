import React,{ Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import CustomRouter from '../config/routes';

class Root extends Component {
	/*
	static propTypes = {
		store: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
*/
	render() {
		return (
			<Provider store={this.props.store} >
		  		<CustomRouter history={this.props.history}/>
		  	</Provider>
		);
	}
}
export default Root;