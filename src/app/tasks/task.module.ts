import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent,
    AddTaskComponent,
    ListComponent,
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
