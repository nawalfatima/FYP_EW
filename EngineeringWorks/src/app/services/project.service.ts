import { IKeyValue } from './../model/IKeyValue';
import { Project } from './../model/Project';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IProject, IProjectPaged, IShowProject } from '../model/iProject';


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
    return this.http.get<IProject>(this.baseUrl + '/Projects/id/'+id);
  }
  getShowProjectById(id: number) {
    return this.http.get<IShowProject>(this.baseUrl + '/Projects/public/'+id);
  }

  getShowProject(pgNo : number, pgSize: number) {
let params = new HttpParams();
params = params.append('pageNumber', pgNo.toString());
params = params.append('pagsizee', pgSize.toString());
return this.http.get<IProjectPaged>(this.baseUrl + '/Projects/public', {params: params});
  }

  getAllProjects(pgNo : number, pgSize: number){
    let params = new HttpParams();
    params = params.append('pageNumber', pgNo.toString());
    params = params.append('pagsizee', pgSize.toString());
    return this.http.get<IProjectPaged>(this.baseUrl + '/Projects/', {params: params});

     }

  addProject(project: Project) {
            localStorage.setItem('newProj', JSON.stringify(project));
          }

        }
