import CoreService from './core.service';

class AuthService {
  #authBaseUrl = 'auth/';
  #authHeaders = {};

  async logInUser(authInfo) {
    const res = await CoreService.post(
      `${this.#authBaseUrl}login/`,
      this.#authHeaders,
      authInfo,
    );
    console.log('logInUser-res->', res);
  }

  async signUpUser(signUpInfo) {
    const res = await CoreService.post(
      `${this.#authBaseUrl}signup/`,
      this.#authHeaders,
      signUpInfo,
    );
    console.log('signInUser-res->', res);
  }
}

export default new AuthService();
