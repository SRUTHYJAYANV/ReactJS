
import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from '../pages/home';
import ListComponent from '../pages/listing';


function AppRouter(): ReactElement {
	return (
		<Switch>
			<Route exact path="/home" component={HomeComponent} />
			<Route exact path="/list" component={ListComponent} />
			<Route>
				<Redirect to="/" />
				<Redirect from="*" to="/home" />
			</Route>
		</Switch>
	);
}

export default AppRouter;
