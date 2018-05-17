import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditTodoComponent } from './task-edit-todo.component';

describe('TaskEditTodoComponent', () => {
  let component: TaskEditTodoComponent;
  let fixture: ComponentFixture<TaskEditTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
