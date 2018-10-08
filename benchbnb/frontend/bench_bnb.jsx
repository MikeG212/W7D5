import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtilSession from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = ApiUtilSession.login;
  window.signup = ApiUtilSession.signup;
  window.logout = ApiUtilSession.logout;
  ReactDOM.render(<h1>Welcome to BenchBnB, it is working</h1>, root);
});
