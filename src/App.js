import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAuthentication from './components/withAuthentication';
import * as routes from './constants/routes';

//Containers
import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';
import SignInPage from './containers/SignInPage/SignInPage';
import LegalPage from './containers/LegalPage/LegalPage';
import ContactPage from './containers/ContactPage/ContactPage';
import ProjectPage from './containers/ProjectPage/ProjectPage';
import SignUpPage from './containers/SignUpPage/SignUpPage';
import ForgotPasswordPage from './containers/ForgotPasswordPage/ForgotPasswordPage';
import AccountPage from './containers/AccountPage/AccountPage';
import CreateProjectPage from './containers/CreateProjectPage/CreateProjectPage'

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Header />
					</header>
					<hr />
					<Route path={routes.HomePage} exact component={HomePage} />
					<Route path={routes.AboutPage} exact component={AboutPage} />
					<Route path={routes.AccountPage} exact component={AccountPage} />
					<Route path={routes.LegalPage} exact component={LegalPage} />
					<Route path={routes.SignInPage} exact component={SignInPage} />
					<Route path={routes.SignUpPage} exact component={SignUpPage} />
					<Route path={routes.ContactPage} exact component={ContactPage} />
					<Route path={routes.ProjectPage} exact component={ProjectPage} />
					<Route path={routes.ForgotPasswordPage} exact component={ForgotPasswordPage} />
					<Route path={routes.CreateProjectPage} exact component={CreateProjectPage} />

					<footer className="App-footer">
						<hr />
						<Footer />
					</footer>
				</div>
			</Router>

		);
	}
}


export default withAuthentication(App);
