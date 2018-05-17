import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTodoComponent } from './category-todo.component';

describe('CategoryTodoComponent', () => {
  let component: CategoryTodoComponent;
  let fixture: ComponentFixture<CategoryTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
