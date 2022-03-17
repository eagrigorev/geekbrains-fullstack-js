import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { defaultUser, userFaves } from './local-storage.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getToDo } from './lesson-3-api.js';

window.addEventListener('DOMContentLoaded', () => {
  getToDo();
  renderUserBlock(defaultUser, userFaves);
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success'
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      }
    }
  );
});
