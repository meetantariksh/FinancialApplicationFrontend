/**
*
* AuthenticationComponent
*
*/
import auth0 from 'auth0-js';

class AuthenticationComponent { // eslint-disable-line react/prefer-stateless-function
  auth0_authentication = new auth0.WebAuth({
    domain: 'meetantariksh.auth0.com',
    clientID: 'fWoMdxejWduzgcOzHeOTi5JG63ck7pyx',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://meetantariksh.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0_authentication.authorize();
  }

}

export default AuthenticationComponent;
