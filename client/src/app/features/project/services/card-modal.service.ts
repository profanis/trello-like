import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Project } from '../../../models/project.model'
import { CardModalComponent } from '../components/card-modal/card-modal.component'

@Injectable({
  providedIn: 'root',
})
export class CardModalService {
  constructor(public dialog: MatDialog) {}

  show(title: string, project: Project) {
    const dialogRef = this.dialog.open(CardModalComponent)
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.project = project

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
