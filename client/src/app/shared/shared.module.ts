import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AutoFocusModule } from './directives/auto-focus/auto-focus.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, AutoFocusModule, FormsModule],
  exports: [CommonModule, AutoFocusModule, FormsModule],
})
export class SharedModule {}
