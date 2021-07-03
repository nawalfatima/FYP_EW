import { ILabelValuePair } from './../model/ILabelValuePair';
import { IResponseSelect } from './../model/IResponse';
import { Project } from './../model/Project';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IKeyValue } from '../model/IKeyValue';


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
getAllProjectsSelect() : Observable <IResponseSelect>{
  return this.http.get<IResponseSelect>(this.baseUrl + '/Projects/non-paginated');

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
          observergen () : any[] {
            let observerArray :ILabelValuePair [] = [] ;
            let projRes : IResponseSelect;
          let count : number;
          let projList : IKeyValue[] ;
            this.getAllProjectsSelect().subscribe(proj=>{
             projRes =proj;
              console.log(projRes);

              projList = projRes.data;
              console.log(projList);

             count = projRes.totalRecords;
              console.log(count);
            for(let i =0; i<count; i++){
              observerArray.push({
                value : projList[i].id,
                label: projList[i].name

              })}
             console.log(observerArray);

             });
             return (observerArray);

           }
        }
