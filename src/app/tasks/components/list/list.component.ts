import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private taskService:TaskService){

  }


  @Input ()
  public taskList: Task[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Output()
  public onCheck: EventEmitter<string> = new EventEmitter();

  onDeleteId(id:string):void{
    this.onDelete.emit(id);
  }

  onCheckId(id: string | undefined):void{
    // this.onCheck.emit(id)
    this.taskService.check(id)
  }


}
