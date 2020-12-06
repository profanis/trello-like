import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  selector: 'trello-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProjectComponent {
  @Output() add = new EventEmitter<string>()

  isEditingMode = false

  addNewList(projectName: string) {
    this.isEditingMode = false
    this.add.emit(projectName)
  }
}
