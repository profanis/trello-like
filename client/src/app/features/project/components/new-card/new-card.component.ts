import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  selector: 'trello-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCardComponent {
  isEditMode = false
  @Output() add = new EventEmitter<string>()

  addNewCard(cardName: string) {
    this.isEditMode = false
    this.add.emit(cardName)
  }
}
