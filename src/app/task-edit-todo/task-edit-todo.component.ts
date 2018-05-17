import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';

import { NgRedux,select } from '@angular-redux/store'; 
import { toDoAppState, task } from "../store/store"; 

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-task-edit-todo',
  templateUrl: './task-edit-todo.component.html',
  styleUrls: ['./task-edit-todo.component.css']
})
export class TaskEditTodoComponent implements OnInit {
  @select() tasks$: Observable<task>;
  public modalRef: BsModalRef;
  tasksList: task;
  categoryId: string;
  currentTask: task;

  taskId: number;

  taskDescription: string;
  taskTitle: string;
  taskDone: boolean;
  
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private ngRedux: NgRedux<toDoAppState>
  ) { }

  ngOnInit() {
    this.tasks$.subscribe(list => this.tasksList = list);
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.taskId = +this.route.snapshot.paramMap.get('taskId');  
    this.currentTask = this.findEditTask(this.tasksList);
    this.taskDescription = this.currentTask.description;
    this.taskTitle = this.currentTask.title;
    this.taskDone = this.currentTask.done;
  }

  private findEditTask (arr) {
    return arr.find(elem => elem.taskId === this.taskId);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public returnToInitial(template: TemplateRef<any>) {
    this.currentTask.description = this.taskDescription;
    this.currentTask.title = this.taskTitle;
    this.currentTask.done = this.taskDone;
    this.modalRef.hide();
  }
}