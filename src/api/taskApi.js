import ls from 'local-storage';

class TaskApi{
    static getAllTasks() {
        return fetch('https://getem-done-functions.azurewebsites.net/api/GetemDoneTasksFunction', 
        {
          headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + ls.get('token')
          }
        })
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