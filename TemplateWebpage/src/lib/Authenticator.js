import auth0 from 'auth0-js'

export default class Authenticator {
    constructor () {
      this.auth0 = new auth0.WebAuth({
        domain: 'amr-dev.auth0.com',
        clientID: 'ssZBxTuH6TmnxPTcpbeu3aAkGgeBU8FK',
        redirectUri: 'http://3.22.43.19:8080/auth',
        responseType: 'token id_token',
        scope: 'openid'
      })
    }
  
    login () {
      this.auth0.authorize();
    }

    handleAuthentication () {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (err)
                return reject(err);
    
            resolve(authResult)
          })
        })
      }
  }
  