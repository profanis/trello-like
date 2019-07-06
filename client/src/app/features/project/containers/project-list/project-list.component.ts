import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { ProjectListService } from '../../project-list.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { ProjectsResponse, Project } from 'src/app/models/project.model'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-project',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectListService],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  data$: Observable<ProjectsResponse>
  project: Project = {}
  addProjectSubscr: Subscription
  removeProjectSubscr: Subscription
  addTaskSubscr: Subscription
  updateProjectSortSubsc: Subscription

  constructor(private projectListService: ProjectListService) {}

  ngOnInit() {
    this.data$ = this.projectListService.getProducts()
  }

  addProject() {
    this.addProjectSubscr = this.projectListService
      .addProject(this.project)
      .pipe(tap(() => (this.project.name = '')))
      .subscribe()
  }

  removeProject(projectId) {
    this.removeProjectSubscr = this.projectListService
      .removeProject(projectId)
      .subscribe()
  }

  addTaskInProject(task, project) {
    this.addTaskSubscr = this.projectListService
      .addTaskInProject(task, project)
      .subscribe()
  }

  drop(event: CdkDragDrop<string[]>, projects) {
    const project = projects[event.previousIndex]
    console.log(project.name, event.previousIndex, event.currentIndex)
    moveItemInArray(projects, event.previousIndex, event.currentIndex)
    this.updateProjectSortSubsc = this.projectListService
      .updateProjectSorting(project.id, event.currentIndex)
      .subscribe()
  }

  ngOnDestroy(): void {
    if (this.addProjectSubscr) {
      this.addProjectSubscr.unsubscribe()
    }

    if (this.removeProjectSubscr) {
      this.removeProjectSubscr.unsubscribe()
    }

    if (this.addTaskSubscr) {
      this.addTaskSubscr.unsubscribe()
    }

    if (this.updateProjectSortSubsc) {
      this.updateProjectSortSubsc.unsubscribe()
    }
  }
}
