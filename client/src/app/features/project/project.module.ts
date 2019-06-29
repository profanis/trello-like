import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ProjectListComponent } from './containers/project-list/project-list.component'
import { ProjectRoutingModule } from './project-routing.module'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardListComponent } from './components/card-list/card-list.component'

@NgModule({
  declarations: [
    // prettier-ignore
    ProjectListComponent,
    CardListComponent,
  ],
  imports: [
    // prettier-ignore
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    DragDropModule,
  ],
})
export class ProjectModule {}
