export function getToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
        return response.json();
    })
        .then((validatedData) => {
        if (validatedData.completed == true) {
            console.log('Nothing to do today.');
        }
        else {
            console.log(validatedData);
        }
    })
        .catch((error) => {
        console.error('Something went wrong', error.message);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzc29uLTMtYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xlc3Nvbi0zLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLFVBQVUsT0FBTztJQUNyQixPQUFPLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztTQUN6RCxJQUFJLENBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUMvQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN0QixJQUFJLGFBQWEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRvRG9SZXNwb25zZSB7XHJcbiAgdXNlcklkOiBudW1iZXIsXHJcbiAgaWQ6IG51bWJlcixcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGNvbXBsZXRlZDogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9EbygpIHtcclxuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJylcclxuICAgIC50aGVuPFRvRG9SZXNwb25zZT4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHZhbGlkYXRlZERhdGEpID0+IHtcclxuICAgICAgaWYgKHZhbGlkYXRlZERhdGEuY29tcGxldGVkID09IHRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90aGluZyB0byBkbyB0b2RheS4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0ZWREYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59Il19