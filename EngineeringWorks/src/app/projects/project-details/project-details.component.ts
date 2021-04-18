import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public projectId!: number;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //plus operator returs numeric representation if the object
    this.projectId = +this.route.snapshot.params['id']

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
