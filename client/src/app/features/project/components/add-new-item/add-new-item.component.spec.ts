import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AddNewItemComponent } from './add-new-item.component'

describe('AddNewItemComponent', () => {
  let component: AddNewItemComponent
  let fixture: ComponentFixture<AddNewItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewItemComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
