import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
//import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => {
  return (
  <GoogleLogin
    clientId="644339519782-37v0onsactiehec1sg2ktla0bu3dvbvp.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);
};


export default Login;