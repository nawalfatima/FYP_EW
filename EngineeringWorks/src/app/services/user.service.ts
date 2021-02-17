import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

regData: User = new User();
readonly baseUrl = "http://localhost:48500/api/Clients";

register(){

return this.http.post(this.baseUrl, this.regData);}




// addUser(user : User){
//   let users =[];

//   if(localStorage.getItem('Users')){
//     users= JSON.parse(localStorage.getItem('Users')!);
//     users = [user, ...users];
//   }else {users = [user];}
//   localStorage.setItem('Users', JSON.stringify(users));
//   //storing object in local storage

// }

}
