/** @format */

import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import "@fortawesome/fontawesome-free/js/all.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Profiles from "./components/profiles/Profiles";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

library.add(fas);

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

console.log("store", store);

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<div className='main-grid'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route component={Routes} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
