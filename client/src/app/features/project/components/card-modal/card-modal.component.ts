import { Component, OnInit } from '@angular/core'
import { Project } from '../../../../models/project.model'

@Component({
  selector: 'trello-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  title: string
  project: Project
  constructor() {}

  ngOnInit(): void {}
}
