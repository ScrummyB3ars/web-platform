import 'whatwg-fetch';

export const requestService = {
  URL: 'https://api-toddlr.herokuapp.com',
  getAllTips(token) {
    fetch(`${this.URL}/theme_tips`)
      .then(response => response.json())
      .then(json => json);
  }
};
