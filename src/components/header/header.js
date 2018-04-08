import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../AuthUserContext';

import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';
import './header.css';

const Header = ({ authUser }) =>
	<div className='header-component'>
		<div>
			<h1>Vestfind</h1>
			<h3>The portal for renewable energy projects</h3>
		</div>
		<div id="navigationBar">
			<AuthUserContext.Consumer>
				{authUser => authUser
					? <NavigationAuth />
					: <NavigationNonAuth />
				}
			</AuthUserContext.Consumer>
		</div>

	</div>

const NavigationAuth = () =>
	<ul>
		<li><Link to={routes.HomePage}>Vestfind</Link></li>
		<li><Link to={routes.AboutPage}>About</Link></li>
		<li><Link to={routes.ProjectPage}>Projects</Link></li>
		<li><Link to={routes.AccountPage}>My Account</Link></li>		
		<li><SignOutButton /></li>
	</ul>

const NavigationNonAuth = () =>
	<ul>
		<li><Link to={routes.HomePage}>Vestfind</Link></li>
		<li><Link to={routes.AboutPage}>About</Link></li>
		<li><Link to={routes.SignInPage}>Sign in</Link></li>
		<li><Link to={routes.SignUpPage}>Sign up</Link></li>
	</ul>

export default Header;
