
import auth0 from 'auth0-js';
import axios from 'axios';

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'meetantariksh.auth0.com',
    clientID: 'fWoMdxejWduzgcOzHeOTi5JG63ck7pyx',
    redirectUri: 'http://localhost:3000/userLoad',
    audience: 'https://meetantariksh.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.renewToken = this.renewToken.bind(this);
    this.initiateLogin = this.initiateLogin.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.renewToken();
      } else if (err) {
        console.log(err);
        window.location.href = '/';
      }
    });
  }

  renewToken() {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
        window.location.href = '/';
      } else {
        this.getUserProfile(result.accessToken);
        let expires = '';
        const date = new Date();
        date.setTime(date.getTime() + (3 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
        document.cookie = `${_globals.config.sustain_login_cookie_name}=${`${result.accessToken}~#~${result.idToken}` || ''}${expires}; path=/`;
      }
    });
  }

  getUserProfile(accessToken) {
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        console.log(profile);
        this.initiateLogin(accessToken, profile);
      }else if(err) {
        console.log(err);
      }
    });
  }

  initiateLogin(accessToken, profile) {
    let body = {
      token: accessToken,
      email: profile.email,
      sub: profile.sub,
    };

    axios({
      method: 'post',
      url: _globals.config.initiate_login,
      data: body,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }).then(function(response){
        console.log(response);
      });

    axios.post(_globals.config.initiate_login, body)
      .then(function(response){
        console.log(response);
      });
  }
}
