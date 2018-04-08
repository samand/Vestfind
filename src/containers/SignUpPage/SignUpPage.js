import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from '../../components/SignUp/SignUp';
import './SignUpPage.css';

const SignUpPage = ({history}) =>
	<div>
		<h1>SignUp</h1>
		<SignUpForm history={history}/>
	</div>


export default withRouter(SignUpPage);
