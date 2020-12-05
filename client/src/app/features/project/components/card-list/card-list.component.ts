import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'trello-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() project: Project
  @Output() deleteCardList = new EventEmitter<string>()
  @Output() dragDrop = new EventEmitter<{
    event: CdkDragDrop<string[]>
    projects: any
  }>()
  @Output() insertItem = new EventEmitter<{ task: string; project: Project }>()

  removeProject(id: string) {
    this.deleteCardList.emit(id)
  }

  drop(event: CdkDragDrop<string[]>, projects) {
    this.dragDrop.emit({
      event,
      projects,
    })
  }

  addTaskInProject(task) {
    this.insertItem.emit({
      task,
      project: this.project,
    })
  }

  dropTask(event: CdkDragDrop<string[]>, tasks) {
    const project = tasks[event.previousIndex]

    moveItemInArray(tasks, event.previousIndex, event.currentIndex)

    // Persist task order in Project
  }
}
