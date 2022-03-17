interface ToDoResponse {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function getToDo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then<ToDoResponse>((response) => {
      return response.json();
    })
    .then((validatedData) => {
      if (validatedData.completed == true) {
        console.log('Nothing to do today.');
      } else {
        console.log(validatedData);
      }
    })
    .catch((error) => {
      console.error('Something went wrong', error.message);
    });
}