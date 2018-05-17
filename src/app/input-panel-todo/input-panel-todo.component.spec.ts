import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPanelTodoComponent } from './input-panel-todo.component';

describe('InputPanelTodoComponent', () => {
  let component: InputPanelTodoComponent;
  let fixture: ComponentFixture<InputPanelTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPanelTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPanelTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
