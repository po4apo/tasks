import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../app.service";
import {pipe, switchMap} from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';

export interface Task {
  created_at: string;
  isDone: boolean;
  id: number;
  title: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TasksService]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []
  title: string = '';

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data.sort((a: Task, b: Task) => {
        return Date.parse(a.created_at) - Date.parse(b.created_at)
      });
    })
  }

  addTodo() {
    this.taskService.createTask(this.title)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.tasks.push(data)
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          this.title = ''
          console.log('post has completed')
        }
      })
  }


}




