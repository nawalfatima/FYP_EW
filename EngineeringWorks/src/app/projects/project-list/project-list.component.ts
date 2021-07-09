import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/iProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects! : Array<IProject>;




  constructor( private projectService: ProjectService,
              ) {
    this.projects = [];

   }

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(

      ( data: IProject[]) => {
        this.projects = data;
        console.log ( data )
      }, (error: any) => {
        console.log("httperror :");
          console.log(error)
          }
    )
  }
}
