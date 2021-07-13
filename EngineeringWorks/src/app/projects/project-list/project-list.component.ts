import { Component, OnInit } from '@angular/core';
import { IProjectPaged, IShowProject } from 'src/app/model/iProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects! : Array<IShowProject>;
  totalItems : number;
  itemsPerPage: number= 6;
  page: number=1;



  constructor( private projectService: ProjectService,
              ) {
    this.projects = [];

   }

  ngOnInit(): void {

    this.projectService.getShowProject(1, 10).subscribe(

      ( res: IProjectPaged) => {
        this.projects = res.data;
        this.totalItems= res.totalRecords;
        this.page= res.pageNumber;
        console.log ( res.data )
        this.page =  0
      }

    )
  }
}
