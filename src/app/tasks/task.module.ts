import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListAllComponent } from './components/list-all/list-all.component';
import { ListPendingComponent } from './components/list-pending/list-pending.component';
import { ListCompletedComponent } from './components/list-completed/list-completed.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AddTaskComponent,
    ListComponent,
    ListAllComponent,
    ListPendingComponent,
    ListCompletedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class TaskModule { }
