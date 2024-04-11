import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  loadTasks(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  addTask(task: Task): void {
    const newTask: Task = { id: uuid(), ...task }
    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  check(id: string | undefined): void {
    console.log(id)

    const task = this.tasks.find((t: Task) => t.id === id);

    if (task) {
      task.check = true;
    }

    localStorage.setItem('tasks', JSON.stringify(task));
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter(Task => Task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
