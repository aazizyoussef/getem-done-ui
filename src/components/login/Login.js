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
    clientId="644339519782-6f5bmtkt0022lchhdu2lb8v8t2agqjlj.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);
};


export default Login;