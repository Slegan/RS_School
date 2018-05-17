import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTodoComponent } from './header-todo.component';

describe('HeaderTodoComponent', () => {
  let component: HeaderTodoComponent;
  let fixture: ComponentFixture<HeaderTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
