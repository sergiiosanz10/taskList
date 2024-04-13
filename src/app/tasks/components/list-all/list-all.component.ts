import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';


@Component({
  selector: 'list-all',
  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css'
})
export class ListAllComponent {
  constructor(private taskService:TaskService){}


  @Input ()
  public taskList: Task[] = []


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

  onDeleteAll(){
    localStorage.clear();
    location.reload()
  }
}
