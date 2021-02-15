import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtUser } from '../model/ext-user';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

getAllUsers():Observable<ExtUser[]>{
  return this.http.get<ExtUser[]>('https://localhost:44382/admin/get')
}

addUser(user : User){
  let users =[];

  if(localStorage.getItem('Users')){
    users= JSON.parse(localStorage.getItem('Users')!);
    users = [user, ...users];
  }else {users = [user];}
  localStorage.setItem('Users', JSON.stringify(users));

}

}
