import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'trello-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  @Input() visible = false
  @Input() title = ''
  @Input() subtitle = ''
  @Output() close = new EventEmitter()

  onClose() {
    this.close.emit()
  }

  @HostListener('document:keydown.escape')
  onEscHandler() {
    this.onClose()
  }
}
