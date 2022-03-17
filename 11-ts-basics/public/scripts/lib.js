export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    if (element != null) {
        element.innerHTML = html;
    }
    else {
        console.log('DOM element is null. Unable to assign');
    }
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            //renderToast(null)
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFFLFNBQWlCLEVBQUUsSUFBWTtJQUMxRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQ3REO0FBQ0gsQ0FBQztBQVlELE1BQU0sVUFBVSxXQUFXLENBQUUsT0FBZ0IsRUFBRSxNQUFjO0lBQzNELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUM7S0FDSDtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtZQUNELG1CQUFtQjtRQUNyQixDQUFDLENBQUM7S0FDSDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2sgKGVsZW1lbnRJZDogc3RyaW5nLCBodG1sOiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdET00gZWxlbWVudCBpcyBudWxsLiBVbmFibGUgdG8gYXNzaWduJyk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgdGV4dDogc3RyaW5nLFxyXG4gIHR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIEFjdGlvbiA9IHtcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgaGFuZGxlcigpOiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdCAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcclxuICBsZXQgbWVzc2FnZVRleHQgPSAnJztcclxuICBcclxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XHJcbiAgICBtZXNzYWdlVGV4dCA9IGBcclxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XHJcbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICAndG9hc3QtYmxvY2snLFxyXG4gICAgbWVzc2FnZVRleHRcclxuICApO1xyXG5cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKTtcclxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XHJcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKTtcclxuICAgICAgfVxyXG4gICAgICAvL3JlbmRlclRvYXN0KG51bGwpXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==