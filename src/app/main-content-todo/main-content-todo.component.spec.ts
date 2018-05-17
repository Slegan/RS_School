import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTodoComponent } from './main-content-todo.component';

describe('MainContentTodoComponent', () => {
  let component: MainContentTodoComponent;
  let fixture: ComponentFixture<MainContentTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
