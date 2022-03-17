import { renderBlock } from './lib.js';
import { user } from './interfaces.js';
import { favouritesAmount } from './types.js';
import { getUserDataCallback } from './interfaces.js';

const userDataRequest = (): Promise<boolean>  => {
  const getUser = localStorage.getItem('defaultUser');
  let isUserData: boolean;
  if (getUser != (null || undefined)) {
    isUserData = true;
  } else {
    isUserData = false;
  }
  return Promise.resolve(isUserData);
};

const getUserData = (callback: (error?: Error, isUserData?: boolean) => unknown): void => {
  userDataRequest()
    .then((isUserData) => {
      callback(null, isUserData);
    })
    .catch((error) => {
      callback(error);
    });
};

const callback: getUserDataCallback = (error, isUserData): user | void => {
  if (error == null && isUserData == true) {
    console.log('Read succesfully');
    const getUser = localStorage.getItem('defaultUser');
    const defaultUser = JSON.parse(getUser);
    return defaultUser;
  } else {
    console.error('Something went wrong', error);
  }
};

// Достаём избранное из local-storage. Я не придумал что тут вообще делать, поэтому просто сделал вывод в консоль
const getFavouritesAmount = (): favouritesAmount => {
  const getUserFaves = localStorage.getItem('userFaves');
  const userFaves = JSON.parse(getUserFaves);
  console.log(`У этого юзера в избранном ${userFaves} элементов`);
  return userFaves;
};

getUserData(callback);
getFavouritesAmount();

// Функция рендерися на основе содержимого local-storage
export const renderUserBlock = (user: user, faves: favouritesAmount): void => {
  let favCaption: number | string;
  if (faves != undefined) {
    favCaption = faves;
  } else {
    favCaption = 'Ничего нет';
  }
  const hasFavItems: boolean = faves > 0 ? true : false;
  renderBlock(
    'user-block',
    `
      <div class="header-container">
        <img class="avatar" src="/img/${user.avatarUrl}" alt="${user.name}"/>
        <div class="info">
          <p class="name">${user.name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavItems ? ' active' : ' inactive'}"></i>${favCaption}
          </p>
        </div>
      </div>
    `
  );
};
