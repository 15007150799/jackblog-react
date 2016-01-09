import React,{Component} from 'react'
import DevTools from './DevTools'
import {Provider} from 'react-redux'
//import {ReduxRouter} from 'redux-router'

import { Router,Route,IndexRoute} from 'react-router'
import Home from './Home'
import Main from '../components/main'
import Article from '../components/article'
import Login from '../components/login'
import Settings from '../components/settings'
import MobileApps from '../components/apps'
import {redirectToBack,redirectToLogin} from '../utils/authService'

export default class Root extends Component{
	render(){
		const {store,history} = this.props
		return (
			<Provider store={store}>
			  <div>
			    <Router history={history}>
			    	<Route path="/" component={Home}>
			    		<IndexRoute component={Main}/>
			    		<Article path="/article/:id" component={Article} />
			    		<Login path="/login" component={Login} onEnter={redirectToBack} />
			    		<Settings path="/settings" component={Settings} onEnter={redirectToLogin} />
			    		<MobileApps path="/apps" component={MobileApps} />
						</Route>
			    </Router>
			    <DevTools />
			  </div>
			</Provider>
		)
	}
}