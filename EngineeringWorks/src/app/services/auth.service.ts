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
    return this.http.get<User[]>('http://localhost:48500/api/Admins')
  }
getAllClients():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:48500/api/Clients')
}
public UserArray =[];


authUser( user : any ){
  if (user.username === "admin"){
    this.getAllAdmins().subscribe(res=> {
      this.UserArray = res;
    });
  }
  else{
    this.getAllClients().subscribe(res=> {
      this.UserArray = res;
    });
    }




let x= this.UserArray.find((u: { username: any; password: any; })=> u.username == user.username && u.password == user.password);
return x;
}

  }

