import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ProjectItemsComponent } from './project-items.component'

describe('ProjectItemsComponent', () => {
  let component: ProjectItemsComponent
  let fixture: ComponentFixture<ProjectItemsComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectItemsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
