import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectListInputComponent } from './new-project-list-input.component';

describe('NewProjectListInputComponent', () => {
  let component: NewProjectListInputComponent;
  let fixture: ComponentFixture<NewProjectListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectListInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
