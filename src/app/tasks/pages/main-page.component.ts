import { Component} from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor( private  taskService: TaskService){}

  get tasks(): Task[]{
    return this.taskService.tasks;
  }

  onDeleteTask(id: string):void{
    this.taskService.deleteTaskById(id );
  }

  check(id: string):void{
    this.taskService.check(id);
  }

  onNewTask(Task: Task){
    this.taskService.addTask( Task );
  }


}
