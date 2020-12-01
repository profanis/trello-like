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
  addProjectSubscription: Subscription
  removeProjectSubscription: Subscription
  addTaskSubscription: Subscription
  updateProjectSortSubscription: Subscription

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

  addTaskInProject(task, project) {
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
    if (this.addProjectSubscription) {
      this.addProjectSubscription.unsubscribe()
    }

    if (this.removeProjectSubscription) {
      this.removeProjectSubscription.unsubscribe()
    }

    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe()
    }

    if (this.updateProjectSortSubscription) {
      this.updateProjectSortSubscription.unsubscribe()
    }
  }
}
