
import auth0 from 'auth0-js';

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'meetantariksh.auth0.com',
    clientID: 'fWoMdxejWduzgcOzHeOTi5JG63ck7pyx',
    redirectUri: 'http://localhost:3000/userLoad',
    audience: 'https://meetantariksh.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }
}
