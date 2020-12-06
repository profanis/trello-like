import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { Project, ProjectsResponse } from 'src/app/models/project.model'
import { ProjectListService } from '../../project-list.service'

@Component({
  selector: 'app-project',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectListService],
})
export class ProjectListComponent implements OnInit {
  data$: Observable<ProjectsResponse>
  project: Project = {}

  constructor(private projectListService: ProjectListService) {}

  ngOnInit() {
    this.data$ = this.projectListService.getProjects()
  }

  addProject(projectName: string) {
    this.projectListService
      .addProject({
        name: projectName,
      })
      .pipe(
        first(),
        tap(() => (this.project.name = ''))
      )
      .subscribe()
  }

  removeProject(projectId) {
    this.projectListService.removeProject(projectId).pipe(first()).subscribe()
  }

  addTaskInProject(task: string, project: Project) {
    this.projectListService
      .addTaskInProject(task, project)
      .pipe(first())
      .subscribe()
  }

  drop(event: CdkDragDrop<string[]>, projects) {
    const clonedProjects = JSON.parse(JSON.stringify(projects))
    moveItemInArray(clonedProjects, event.previousIndex, event.currentIndex)

    const updatedIndexes = clonedProjects.map((it, index) => ({
      id: it.id,
      order: index,
    }))

    this.projectListService
      .updateProjectsOrder(updatedIndexes)
      .pipe(first())
      .subscribe()
  }
}
