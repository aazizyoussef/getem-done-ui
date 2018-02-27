import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import ls from 'local-storage';
// or
//import { GoogleLogin } from 'react-google-login';


const onSuccess = (response) => {
  //window.open("https://getem-done-functions.azurewebsites.net/.auth/login/google");
  ls.set("token", response.tokenId);  
};

const onFailure = (response) => {
  console.log(response);
};

const Login = () => {
  return (
    <a href="https://getem-done-functions.azurewebsites.net/.auth/login/google?post_login_redirect_uri=https://getem-done-ui.azurewebsites.net">Login</a>
);
};


export default Login;