import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoxTodoComponent } from './task-box-todo.component';

describe('TaskBoxTodoComponent', () => {
  let component: TaskBoxTodoComponent;
  let fixture: ComponentFixture<TaskBoxTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBoxTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
