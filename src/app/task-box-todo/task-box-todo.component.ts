import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';

import { select } from '@angular-redux/store'; 
import { task } from "../store/store"; 

@Component({
  selector: 'app-task-box-todo',
  templateUrl: './task-box-todo.component.html',
  styleUrls: ['./task-box-todo.component.css']
})
export class TaskBoxTodoComponent implements OnInit {
  @select() tasks$: Observable<task>;
  tasksList: task;
  categoryId: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tasks$.subscribe(list => this.tasksList = list);
  }

  ngDoCheck() {
    this.getcategoryId();
  }

  getcategoryId(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');    
  }

}
