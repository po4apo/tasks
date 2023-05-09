import {Component, Input} from '@angular/core';
import {Task} from "../task-list/task-list.component";
import {TasksService} from "../app.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TasksService]
})
export class TaskComponent {
  @Input() task: Task = {
    created_at: "2023-04-26T13:31:53.079370Z",
    isDone: false,
    id: 1,
    title: "task 1"
  };
  isDone = false

  isDeleted = false;

  constructor(private taskService: TasksService) {
  }

  doDone() {
    this.task.isDone = true
    this.taskService.updateTask(this.task)
  }

  doNotDone() {
    this.task.isDone = false
    this.taskService.updateTask(this.task)
  }

  deleteTask() {
    this.taskService.deleteTask(this.task)
    this.isDeleted = true
  }
}
