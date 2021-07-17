import { IStaffEditableInfo } from './../../model/IStaff';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddStaff, IStaffInfo, IStaffPaged } from 'src/app/model/IStaff';

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
getAllStaff(pgNo : number, pgSize: number) : Observable <IStaffPaged>{
  let params = new HttpParams();
params = params.append('pageNumber', pgNo.toString());
params = params.append('pageSize', pgSize.toString());
return this.http.get<IStaffPaged>(this.baseUrl + '/staff', {params: params});

  }
  getStaffById(id : number) : Observable <IStaffInfo>{
    return this.http.get<IStaffInfo>(this.baseUrl + '/staff/id/' +id);

      }
addStaff(staff : IAddStaff){

}

updateStaff(staffId: number, staff : IStaffEditableInfo): Observable <any>{

return this.http.put<any>(this.baseUrl + '/Staff/update-staff/' + staffId , staff)
}
}
