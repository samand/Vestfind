import React from 'react';

import AuthUserContext from '../../components/AuthUserContext';
import withAuthorization from '../../components/withAuthorization';
import ForgotPasswordForm from '../../components/ForgotPassword/ForgotPassword';
import ChangePasswordForm from '../../components/ChangePassword/ChangePassword';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <ChangePasswordForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);