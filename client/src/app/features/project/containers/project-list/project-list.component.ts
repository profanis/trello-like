import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { Project, ProjectsResponse } from 'src/app/models/project.model'
import { ProjectListService } from '../../project-list.service'

@Component({
  selector: 'app-project',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectListService],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  data$: Observable<ProjectsResponse>
  project: Project = {}

  private addProjectSubscription: Subscription
  private removeProjectSubscription: Subscription
  private addTaskSubscription: Subscription
  private updateProjectSortSubscription: Subscription

  constructor(private projectListService: ProjectListService) {}

  ngOnInit() {
    this.data$ = this.projectListService.getProjects()
  }

  addProject() {
    this.addProjectSubscription = this.projectListService
      .addProject(this.project)
      .pipe(
        first(),
        tap(() => (this.project.name = ''))
      )
      .subscribe()
  }

  removeProject(projectId) {
    this.removeProjectSubscription = this.projectListService
      .removeProject(projectId)
      .pipe(first())
      .subscribe()
  }

  addTaskInProject(task: string, project: Project) {
    debugger
    this.addTaskSubscription = this.projectListService
      .addTaskInProject(task, project)
      .pipe(first())
      .subscribe()
  }

  // TODO: fix this
  drop(event: CdkDragDrop<string[]>, projects) {
    const project = projects[event.previousIndex]
    console.log(project.name, event.previousIndex, event.currentIndex)
    moveItemInArray(projects, event.previousIndex, event.currentIndex)

    this.updateProjectSortSubscription = this.projectListService
      .updateProjectSorting(project.id, event.currentIndex)
      .pipe(first())
      .subscribe()
  }

  ngOnDestroy(): void {
    this.addProjectSubscription?.unsubscribe()
    this.removeProjectSubscription?.unsubscribe()
    this.addTaskSubscription?.unsubscribe()
    this.updateProjectSortSubscription?.unsubscribe()
  }
}
