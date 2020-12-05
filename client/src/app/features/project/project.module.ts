import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component'
import { CardListComponent } from './components/card-list/card-list.component'
import { ProjectListComponent } from './containers/project-list/project-list.component'
import { ProjectRoutingModule } from './project-routing.module';
import { NewProjectListInputComponent } from './components/new-project-list-input/new-project-list-input.component'

@NgModule({
  declarations: [ProjectListComponent, CardListComponent, AddNewTaskComponent, NewProjectListInputComponent],
  imports: [SharedModule, ProjectRoutingModule, DragDropModule],
})
export class ProjectModule {}
