import { IKeyValue } from './../model/IKeyValue';
import { Project } from './../model/Project';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:48500/api';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
getAllProjectsSelect() : Observable <IKeyValue[]>{
  return this.http.get<IKeyValue[]>(this.baseUrl + '/Projects/non-paginated');

      }


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
          // observergen () : Observable<IKeyValue[]> {
          // let projList : IKeyValue[] ;
          //   this.getAllProjectsSelect().subscribe(proj=>{
          //     projList =proj;
          //     console.log(projList);




          //    });
          //    return of(projList);

          //  }
        }
