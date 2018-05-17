import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryTodoComponent } from './category-todo/category-todo.component'
import { TaskBoxTodoComponent } from './task-box-todo/task-box-todo.component'
import { TaskEditTodoComponent } from './task-edit-todo/task-edit-todo.component'


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'tasks', component: TaskTodoComponent },
  { path: ':id/tasks', component: TaskBoxTodoComponent },
  { path: ':id/tasks/:taskTitle/:taskId/edit', component: TaskEditTodoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}