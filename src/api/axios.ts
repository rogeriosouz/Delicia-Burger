import axios from 'axios';
import { parseCookies } from 'nookies';

const { authUser } = parseCookies();

const api = axios.create({ baseURL: 'http://localhost:3333' });

if (authUser) {
  api.defaults.headers['authorization'] = authUser;
}

export { api };
