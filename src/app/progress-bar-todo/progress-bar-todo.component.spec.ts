import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarTodoComponent } from './progress-bar-todo.component';

describe('ProgressBarTodoComponent', () => {
  let component: ProgressBarTodoComponent;
  let fixture: ComponentFixture<ProgressBarTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
