export const TOKEN_STR = 'token';

class API {
  constructor () {
    this.baseUrl = 'https://byte-tasks.herokuapp.com';
    this.headers = {
      Authorization: null,
      'Content-Type': 'application/json',
    };
  }

  handleError (response) {
    if (!response.ok) {
      throw new Error (
        `ON URL ${response.url} RESPONSE STATUS: ${response.status}`
      );
    }
  }

  async regUser (userData) {
    const response = await fetch (`${this.baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify (userData),
    });

    this.handleError (response);

    const user = await response.json ();
    return user;
  }

  async logUser (userData) {
    const response = await fetch (`${this.baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify (userData),
    });

    this.handleError (response);

    const result = await response.json ();
    this.headers.Authorization = `Bearer ${result.token}`;

    localStorage.setItem (TOKEN_STR, result.token);
  }

  async getUser () {
    const response = await fetch (`${this.baseUrl}/api/auth/user/self`, {
      method: 'GET',
      headers: this.headers,
    });

    this.handleError (response);

    const user = await response.json ();
    return user;
  }

  isLoggedIn () {
    return Boolean (localStorage.getItem (TOKEN_STR));
  }

  autoLogin() {
      const storageToken = localStorage.getItem (TOKEN_STR);
      this.headers.Authorization = `Bearer ${storageToken}`;

      return this.getUser();
  }

  addTask () {}

  postTask () {}

  taskTimer () {}

  removeTask () {}
}

export const api = new API ();
