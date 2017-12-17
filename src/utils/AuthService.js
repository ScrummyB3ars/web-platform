import { requestService } from './RequestService';
import { setCookie } from './Cookie';
import { sha256 } from 'js-sha256';

export const authService = {
  isAuthenticated: false,
  authenticate(email, password, remember, cb) {
    this.isAuthenticated = true;
    requestService.getUser(email).then(json => {
      const user = json;
      if (!user) {
        return false;
      }
      if (user.password === sha256(password)) {
        // THIS IS NOT SAFE
        // SET A TOKEN RETURNED FROM THE SERVER INSTEAD
        // THIS IS FOR DEMO PURPOSES ONLY
        if (remember) {
          setCookie('email', email, 365);
          setCookie('password', password, 365);
        } else {
          // session only
          setCookie('email', email);
          setCookie('password', password);
        }
        cb();
      } else {
        return false;
      }
    });
  },
  signout(cb) {
    this.isAuthenticated = false;
    setCookie('email', '', -1);
    setCookie('password', '', -1);
    cb();
  }
};
