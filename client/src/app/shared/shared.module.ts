import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AutoFocusModule } from './directives/auto-focus/auto-focus.module'
import { ModalModule } from './modal/modal.module'

const COMPONENTS = []
const MODULES = [AutoFocusModule, ModalModule]
const SYS_MODULES = [CommonModule, FormsModule]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...SYS_MODULES, ...MODULES],
  exports: [...SYS_MODULES, ...MODULES, ...COMPONENTS],
})
export class SharedModule {}
