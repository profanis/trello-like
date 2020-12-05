import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[trelloAutoFocus]',
})
export class AutoFocusDirective implements OnInit {
  private el: HTMLElement

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement
  }

  ngOnInit() {
    this.el.focus()
  }
}
