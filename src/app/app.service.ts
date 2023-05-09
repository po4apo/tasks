import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Task} from "./task-list/task-list.component";


// const URL = 'http://127.0.0.1:8000/api/tasks/'
const URL = 'http://577a-88-200-230-153.ngrok-free.app/api/tasks/'

@Injectable()
export class TasksService {

  tasks: Task[] = []

  constructor(private httpClient: HttpClient) {}

  getTasks() {
    console.log('get is called')
    return this.httpClient.get<Task[]>(URL)
  }

  createTask(title: string){
    console.log('post is called')
    return this.httpClient.post<Task>(URL, {title: title})
  }

  updateTask(new_task: Task){
    console.log('update is called')
    this.httpClient.put(URL + new_task.id+'/', new_task).subscribe(response =>{
      console.log(response)
    })
  }

  deleteTask(task: Task){
    console.log('delete is called')
    this.httpClient.delete(URL + task.id+'/').subscribe(response =>{
      console.log(response)
    })
  }



  getStaticTasks(): Task[] {
    this.tasks = [
      {
        created_at: "2023-04-26T13:31:53.079370Z",
        isDone: false,
        id: 1,
        title: "task 1"
      },
      {
        created_at: "2023-04-26T13:31:53.079370Z",
        isDone: false,
        id: 2,
        title: "task 2"
      },
    ]

    console.log('get static tasks')
    return this.tasks
  }


}
