import React from 'react';

import AuthUserContext from '../../components/AuthUserContext';
import withAuthorization from '../../components/withAuthorization';
import ChangePasswordForm from '../../components/ChangePassword/ChangePassword';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <p>uid: {console.log(authUser)}</p>
        <ChangePasswordForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);