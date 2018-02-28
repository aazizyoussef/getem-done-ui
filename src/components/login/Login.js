import React from 'react';
import ReactDOM from 'react-dom';
import {DOMAIN} from '../../settings';

const Login = () => {
  return (
    <a href={"https://getem-done-functions.azurewebsites.net/.auth/login/google?post_login_redirect_uri=" + DOMAIN}>Login</a>
);
};


export default Login;