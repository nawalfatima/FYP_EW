import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtUser } from '../model/ext-user';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private http: HttpClient) { }

getAllUsers():Observable<ExtUser[]>{
    return this.http.get<ExtUser[]>('https://localhost:44382/admin/get')
  }



authUser( user : any ){
  let UserArray = [];
  if(localStorage.getItem('Users')){

    UserArray = JSON.parse(localStorage.getItem('Users'));

    return UserArray.find((u: { username: any; password: any; })=> u.username == user.username && u.password == user.password);
  }

  }

}
