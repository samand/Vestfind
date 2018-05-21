import React from 'react';

import AuthUserContext from '../../components/AuthUserContext';
import withAuthorization from '../../components/withAuthorization';
import ChangePasswordForm from '../../components/ChangePassword/ChangePassword';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <p>uid: {authUser.uid}</p>
        {console.log(authUser)}
        {console.log(typeof(authUser))}
        {console.log(authUser.uid)}
        <ChangePasswordForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);