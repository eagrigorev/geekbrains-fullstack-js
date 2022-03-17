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
    renderToast({
        text: 'Это пример уведомления. Используйте его при необходимости',
        type: 'success'
    }, {
        name: 'Понял',
        handler: () => {
            console.log('Уведомление закрыто');
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxlQUFlLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixXQUFXLENBQ1Q7UUFDRSxJQUFJLEVBQUUsMkRBQTJEO1FBQ2pFLElBQUksRUFBRSxTQUFTO0tBQ2hCLEVBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQztLQUNGLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtZm9ybS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0VXNlciwgdXNlckZhdmVzIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrIH0gZnJvbSAnLi91c2VyLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICByZW5kZXJVc2VyQmxvY2soZGVmYXVsdFVzZXIsIHVzZXJGYXZlcyk7XHJcbiAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKCk7XHJcbiAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCk7XHJcbiAgcmVuZGVyVG9hc3QoXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICfQrdGC0L4g0L/RgNC40LzQtdGAINGD0LLQtdC00L7QvNC70LXQvdC40Y8uINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0LXQs9C+INC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCcsXHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ9Cf0L7QvdGP0LsnLFxyXG4gICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbn0pO1xyXG4iXX0=

