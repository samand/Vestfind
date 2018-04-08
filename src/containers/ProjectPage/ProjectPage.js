import React from 'react';
import withAuthorization from '../../components/withAuthorization';
import './ProjectPage.css';


const HomePage = () =>
	<div>
		<h3>ProjectPage</h3>
		<p>The Project page is accessible by every signed in user.</p>
	</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
