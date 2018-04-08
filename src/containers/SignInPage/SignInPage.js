import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from '../../components/SignIn/SignIn';
import { ForgotPasswordLink } from '../../components/ForgotPassword/ForgotPassword';
import { SignUpLink } from '../../components/SignUp/SignUp';
import './SignInPage.css';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <ForgotPasswordLink />
    <SignUpLink />
  </div>


export default withRouter(SignInPage);