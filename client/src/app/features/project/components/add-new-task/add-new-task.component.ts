import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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

  isEditMode = false

  addCard(cardValue: string) {
    this.add.emit(cardValue)
    this.isEditMode = false
  }
}
