import {TASKS_API_URL} from '../settings';

class TaskApi{
    static getAllTasks() {
        return fetch(TASKS_API_URL, 
        {
          credentials: "include"
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