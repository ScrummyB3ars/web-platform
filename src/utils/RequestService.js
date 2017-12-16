import 'whatwg-fetch';

export const requestService = {
  URL: 'https://api-toddlr.herokuapp.com',
  getThemeTips() {
    return fetch(`${this.URL}/theme_tips`).then(response => response.json());
  },
  getInteractionTips() {
    return fetch(`${this.URL}/interaction_tips`).then(response =>
      response.json()
    );
  },
  getUser(email) {
    return fetch(`${this.URL}/users`)
      .then(response => response.json())
      .then(json => json.filter(u => u.email === email)[0]);
  }
};
