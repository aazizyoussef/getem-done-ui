import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import ls from 'local-storage';
// or
//import { GoogleLogin } from 'react-google-login';


const onSuccess = (response) => {
  ls.set("token", response.tokenId);  
};

const onFailure = (response) => {
  console.log(response);
};

const Login = () => {
  return (
  <GoogleLogin
    clientId="644339519782-37v0onsactiehec1sg2ktla0bu3dvbvp.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
  />
);
};


export default Login;