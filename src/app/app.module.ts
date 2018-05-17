import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, toDoAppState, INITIAL_STATE } from './store/store';
import { CounterActions } from './store/app.actions'; 

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { HeaderTodoComponent } from './header-todo/header-todo.component';
import { MainContentTodoComponent } from './main-content-todo/main-content-todo.component';
import { CategoryTodoComponent } from './category-todo/category-todo.component';
import { TaskTodoComponent } from './task-todo/task-todo.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskBoxTodoComponent } from './task-box-todo/task-box-todo.component';
import { TaskEditTodoComponent } from './task-edit-todo/task-edit-todo.component';
import { ProgressBarTodoComponent } from './progress-bar-todo/progress-bar-todo.component';
import { InputPanelTodoComponent } from './input-panel-todo/input-panel-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTodoComponent,
    MainContentTodoComponent,
    CategoryTodoComponent,
    TaskTodoComponent,
    TaskBoxTodoComponent,
    TaskEditTodoComponent,
    ProgressBarTodoComponent,
    InputPanelTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    // Angular2FontawesomeModule,
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<toDoAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  }
}
