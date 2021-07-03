import { IloginReq, IloginReqForm } from './../model/IloginReq';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError, retry } from 'rxjs/operators';
import { IRegisterReq } from '../model/IRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private http: HttpClient) { }
baseUrl = 'http://localhost:48500/api';
httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
regData: IRegisterReq;

 loginResponse: any;
loginAdmin (user:IloginReq)  {
  return this.http.post(this.baseUrl + '/Admins/login', user)}

loginClient (user:IloginReq)  {
  return this.http.post(this.baseUrl + '/Clients/login', user)}

registerClient(user: IRegisterReq){
    console.log (this.regData);

  return this.http.post(this.baseUrl + '/Clients/register', user);}

// getAllAdmins():Observable<User[]>{
//     return this.http.get<User[]>('http://localhost:48500/api/Admins')
//   }
// getAllClients():Observable<User[]>{
//   return this.http.get<User[]>('http://localhost:48500/api/Clients')
// }
//public UserArray =[];

authUser( user : IloginReqForm ){
  const myuser : IloginReq = {username : user.username, password : user.password} ;
  // myuser.username = user.username;
  // myuser.password= user.password;

if (user.role === "1"){
   return this.loginAdmin( myuser)
    //.subscribe(res=> {
     // res;
   // });
  }
  else{
   return this.loginClient(myuser)
    // .subscribe(res=> {
    //   console.log(res);
    // });
    }




//let x= this.UserArray.find((u: { username: any; password: any; })=> u.username == user.username && u.password == user.password);
//return x;

}

// authUser( user : any ){
//   if (user.role === "1"){
//     this.getAllAdmins().subscribe(res=> {
//       this.UserArray = res;
//     });
//   }
//   else{
//     this.getAllClients().subscribe(res=> {
//       this.UserArray = res;
//     });
//     }




// let x= this.UserArray.find((u: { username: any; password: any; })=> u.username == user.username && u.password == user.password);
// return x;

// }
processError(err) {
  let message = '';
  if(err.error instanceof ErrorEvent) {
   message = err.error.message;
  } else {
   message = `Error Code: ${err.status}\nMessage: ${err.message}`;
  }
  console.log(message);
  return throwError(message);
}
  }

