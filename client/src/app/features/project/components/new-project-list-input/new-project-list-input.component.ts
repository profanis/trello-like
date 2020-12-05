import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  selector: 'trello-new-project-list-input',
  templateUrl: './new-project-list-input.component.html',
  styleUrls: ['./new-project-list-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProjectListInputComponent {
  @Output() add = new EventEmitter<string>()

  isEditingMode = false

  addNewList(projectName: string) {
    this.isEditingMode = false
    this.add.emit(projectName)
  }
}
