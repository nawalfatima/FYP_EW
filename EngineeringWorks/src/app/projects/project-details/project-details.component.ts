import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public projectId!: number;
  project = new Project();


  constructor(private route: ActivatedRoute,
    private router: Router,
    private projectService : ProjectService) { }

  ngOnInit(): void {
    //plus operator returs numeric representation if the object

    this.projectId = +this.route.snapshot.params['id'];


    this.route.params.subscribe(
      (params) => {
        this.projectId = +params['id'];
        this.projectService.getProject(this.projectId).subscribe(
          (data: Project) => {
            this.project = data;
          }
        );
      }
    )

  }
  onBack(){
    this.router.navigate(["/project"]);
  }

  onSelectNext(){
    this.projectId +=1;
    this.router.navigate(['project-detail', this.projectId])
  }
  onSelectPrevious(){
    this.projectId -=1;
    this.router.navigate(['project-detail', this.projectId])
  }

}
