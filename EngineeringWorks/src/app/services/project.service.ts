import { Project } from './../model/Project';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }


  getProject(id: number) {
    return this.getAllProjects().pipe(
      map(projectArray => {
        return projectArray.find(p => p.id === id);
      })
    );
  }

  getShowProject() {
    return this.getAllProjects().pipe(
      map(projectArray => {
                const showArray : Array<Project> = [];

        let item= projectArray.find(p => p.show === 1);



      })
    );
  }

  getAllProjects(){

    return this.http.get('data/projects.json').pipe(

      map(data => {
       const projectArray : Array<Project> = [];


       for (const id in data){
        if(data.hasOwnProperty(id)){

            projectArray.push(data[id]);

          }
          };
          return projectArray;}))}

  addProject(project: Project) {
            localStorage.setItem('newProj', JSON.stringify(project));
          }
}
