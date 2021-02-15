
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProject } from '../model/iProject';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProjects() {

    return this.http.get('data/projects.json').pipe(

      map(data => {
       const projectArray : Array<IProject> = [];


       for (const id in data){
        if(data.hasOwnProperty(id)){

            projectArray.push(data[id]);


          }
          };
          return projectArray;
        }


       )
    )

  }
}
