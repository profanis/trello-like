import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component'
import { NewProjectListInputComponent } from './components/new-project-list-input/new-project-list-input.component'
import { ProjectItemsComponent } from './components/project-items/project-items.component'
import { ProjectListComponent } from './containers/project-list/project-list.component'
import { ProjectRoutingModule } from './project-routing.module'

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectItemsComponent,
    AddNewItemComponent,
    NewProjectListInputComponent,
  ],
  imports: [SharedModule, ProjectRoutingModule, DragDropModule],
})
export class ProjectModule {}
