import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={this.state.email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
          </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const ForgotPasswordLink = () =>
  <p>
    <Link to={routes.ForgotPasswordPage}>Forgot Password?</Link>
  </p>


export default ForgotPasswordForm;

export {
    ForgotPasswordLink,
  };