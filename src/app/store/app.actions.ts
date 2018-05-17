import { Injectable } from '@angular/core';
import { Action } from 'redux';

import { category, task } from "../store/store"; 

@Injectable()
export class CounterActions {
  static SELECTCATEGORY = 'SELECTCATEGORY';
  static DELETECATEGORY = 'DELETECATEGORY';
  static RENAMECATEGORY = 'RENAMECATEGORY';
  static ADDNESTEDCATEGORY = 'ADDNESTEDCATEGORY';
  static TOGGLENESTEDCATEGORY = 'TOGGLENESTEDCATEGORY';
  static SAVECHANGESONTASKS = 'SAVECHANGESONTASKS';
  static CREATENEWCATEGORY = 'CREATENEWCATEGORY';
  static ADDNEWTASK = 'ADDNEWTASK';
  static TOGGLECHECKBOX = 'TOGGLECHECKBOX';
  static SEARCH ='SEARCH';
  static category: category;
  static categoryId: string;
  static editTask: task;
  static newName: string;
  static toggleCount: number;
  static searchSubStr: string;
  static searchDone: boolean;

  
  selectCategory(category): Action {
    CounterActions.category = category;
    return { type: CounterActions.SELECTCATEGORY }
  }

  deleteCategory(category) {
    CounterActions.category = category;
    return { type: CounterActions.DELETECATEGORY }
  }

  renameCategory(category, newName) {
    CounterActions.category = category;
    CounterActions.newName = newName;
    return { type: CounterActions.RENAMECATEGORY }
  }

  addNestedCategory(category, newName) {
    CounterActions.category = category;
    CounterActions.newName = newName;
    return { type: CounterActions.ADDNESTEDCATEGORY }
  }

  toggleNestedCategory(category, count) {
    CounterActions.category = category;
    CounterActions.toggleCount = count;
    return { type: CounterActions.TOGGLENESTEDCATEGORY }
  }

  createNewCategory(newCategoryName) {
    CounterActions.newName = newCategoryName;
    return { type: CounterActions.CREATENEWCATEGORY }
  }
  addNewTask(newTaskName) {
    CounterActions.newName = newTaskName;
    return { type: CounterActions.ADDNEWTASK }
  }

  toggleCheckBox(categoryId, task) {
    CounterActions.categoryId = categoryId;
    CounterActions.editTask = task;
    return { type: CounterActions.TOGGLECHECKBOX }
  }

  onSearch (categoryName, searchDone) {
    CounterActions.searchSubStr = categoryName;
    CounterActions.searchDone = searchDone;
    return { type: CounterActions.SEARCH }
  }
}