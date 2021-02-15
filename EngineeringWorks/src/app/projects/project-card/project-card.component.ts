import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/iProject';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project!: IProject ;



  constructor() { }


  ngOnInit(): void {
  }

}
