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
  },
  subscribeUser(email, zip_code) {
    return fetch(`${this.URL}/users/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'test',
        email,
        zip_code
      })
    });
  },
  getThemes() {
    return fetch(`${this.URL}/themes`).then(response => response.json());
  },
  addThemeTip(tip) {
    return fetch(`${this.URL}/theme_tips/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tip)
    });
  },
  deleteThemeTip(id) {
    return fetch(`${this.URL}/theme_tips/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  }
};
