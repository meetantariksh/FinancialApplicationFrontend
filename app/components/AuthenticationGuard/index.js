/**
*
* AuthenticationGuard
*
*/
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

function authenticationGuard() {
    let authToken = window.sessionStorage.getItem('non_db_authentication_token');
    console.log(authToken);
    if(authToken && authToken !== ''){
        /*let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;*/
        return true;
    }else{
        return false;
    }
}

export const ProtectedRoute = ({component: Component, ...extras}) => (
    <Route {...extras} render={props => (
        authenticationGuard() ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
      )}/>
);