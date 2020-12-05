import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'trello-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewTaskComponent {
  @Output() add = new EventEmitter<string>()
  @Output() isEditModeChange = new EventEmitter<boolean>()

  @Input() placeholder = 'Enter a title for this card...'
  @Input() set isEditMode(value: boolean) {
    this._isEditMode = value
    this.isEditModeChange.emit(value)
  }

  get isEditMode() {
    return this._isEditMode
  }

  private _isEditMode = false

  @Input() buttonTitle = 'Add card'

  addCard(cardValue: string) {
    this.add.emit(cardValue)
    this.isEditMode = false
  }
}
