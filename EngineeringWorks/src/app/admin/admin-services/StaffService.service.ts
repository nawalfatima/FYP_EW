import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStaffInfo } from 'src/app/model/IStaff';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

constructor(private http: HttpClient) { }
baseUrl = 'http://localhost:48500/api';
httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
//needs pagination parameters
getAllStaff() : Observable <IStaffInfo[]>{
return this.http.get<IStaffInfo[]>(this.baseUrl + '/staff');

  }
  getStaffById() : Observable <IStaffInfo[]>{
    return this.http.get<IStaffInfo[]>(this.baseUrl + '/Projects/non-paginated');

      }

}
