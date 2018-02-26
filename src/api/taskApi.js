class TaskApi{
    static getAllTasks() {
        return fetch('https://getem-done-functions.azurewebsites.net/api/GetemDoneTasksFunction?code=8caap7x6PjnkqapCM0JaCafro1FJ27qh4ji2exZnTaWYzcTH3jcyyw==')
        .then((result) => {
          // Get the result
          // If we want text, call result.text()
          return result.json();
        }).then((jsonResult) => {
          // Do something with the result
          console.log(jsonResult);
        });
      }
}
export default TaskApi;