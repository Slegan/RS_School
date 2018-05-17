import { Component, Input, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select } from '@angular-redux/store'; 
import { CounterActions } from '../store/app.actions'; 
import { toDoAppState, category } from "../store/store"; 

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-category-todo',
  templateUrl: './category-todo.component.html',
  styleUrls: ['./category-todo.component.css']
})
export class CategoryTodoComponent {
  @Input() category: category;
  @Input() numberOfCategory: number;
  public modalRef: BsModalRef;
  newName: string;
  toggleCount: number = 0;
  
  constructor(
    private modalService: BsModalService,
    private ngRedux: NgRedux<toDoAppState>,
    private actions: CounterActions
  ) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public closeModal(template: TemplateRef<any>) {
    this.modalRef.hide();
  }

  public deleteCategory(template: TemplateRef<any>) {
    this.ngRedux.dispatch(this.actions.deleteCategory(this.category));
    this.modalRef.hide();
  }

  public renameCategory(template: TemplateRef<any>) {    
    this.ngRedux.dispatch(this.actions.renameCategory(this.category, this.newName));
    this.newName = '';
    this.modalRef.hide();
  }

  public addNestedCategory(template: TemplateRef<any>) {    
    this.ngRedux.dispatch(this.actions.addNestedCategory(this.category, this.newName));
    this.newName = '';
    this.modalRef.hide();
  }

  public toggleNestedCategory() {
    this.toggleCount++;
    this.ngRedux.dispatch(this.actions.toggleNestedCategory(this.category, this.toggleCount));
    
  }

}
