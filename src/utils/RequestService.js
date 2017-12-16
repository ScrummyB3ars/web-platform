import 'whatwg-fetch';

export const requestService = {
  URL: 'https://api-toddlr.herokuapp.com',
  getAllTips(token) {
    return fetch(`${this.URL}/theme_tips`).then(response => response.json());
  }
};
