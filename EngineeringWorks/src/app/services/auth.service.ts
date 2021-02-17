import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private http: HttpClient) { }

getAllAdmins():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:48500/api/Admins')
  }
getAllClients():Observable<User[]>{
  return this.http.get<User[]>('https://localhost:48500/api/Clients')
}


authUser( user : any ){
  let UserArray = [];
  if(localStorage.getItem('Users')){

    UserArray = JSON.parse(localStorage.getItem('Users'));

    return UserArray.find((u: { username: any; password: any; })=> u.username == user.username && u.password == user.password);
  }

  }

}
