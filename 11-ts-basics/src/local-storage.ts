import { user } from './interfaces.js';
import { favouritesAmount } from './types.js';

const defaultUser: user = {
  name: 'John Galt',
  avatarUrl: 'avatar.png',
};

const userFaves: favouritesAmount = 5;

localStorage.setItem('defaultUser', JSON.stringify(defaultUser));
localStorage.setItem('userFaves', JSON.stringify(userFaves));