import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'trello-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewItemComponent {
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

  addItem(value: string) {
    this.add.emit(value)
    this.isEditMode = false
  }
}
