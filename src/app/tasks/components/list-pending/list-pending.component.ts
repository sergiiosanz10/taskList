import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'list-pending',
  templateUrl: './list-pending.component.html',
  styleUrl: './list-pending.component.css'
})
export class ListPendingComponent {

  constructor(private taskService:TaskService){}

  @Input ()
  public taskList: Task[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Output()
  public onCheck: EventEmitter<string> = new EventEmitter();

  @Output()
  public onModify: EventEmitter<string> = new EventEmitter();

  onDeleteId(id:string):void{
    this.taskService.deleteTaskById(id)
  }

  onCheckId(id: string | undefined):void{
    // this.onCheck.emit(id)
    this.taskService.check(id)
  }

  onModifyId(id:string | undefined , newName: string):void{

    this.taskService.taskModify(id!, newName)
  }

  onDeleteTaskPending():void{
    this.taskService.tasks = this.taskService.tasks.filter(Task => Task.check === true)
    localStorage.setItem('tasks', JSON.stringify(this.taskService.tasks));
  }

}
