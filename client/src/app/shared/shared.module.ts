import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list'
import { AutoFocusModule } from './directives/auto-focus/auto-focus.module'
import { ModalModule } from './modal/modal.module'

const COMPONENTS = []
const MODULES = [
  AutoFocusModule,
  ModalModule,
  MatDialogModule,
  MatGridListModule,
]
const SYS_MODULES = [CommonModule, FormsModule]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...SYS_MODULES, ...MODULES],
  exports: [...SYS_MODULES, ...MODULES, ...COMPONENTS],
})
export class SharedModule {}
