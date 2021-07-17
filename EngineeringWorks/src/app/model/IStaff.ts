import { Url } from 'url';
import { SalaryType } from './../Enums/enums';
export interface IStaffInfo {
staffID : number,
staffFname : string,
staffLname : string,
salaryAmt? : number,
designation: string,
staffStatus: string,
staffPhNo : string,
staffAddress : string,
staffEmail : string,
joiningDate: Date,
leavingDate: Date,
salaryType : string,

roles: IRole[]


}
export interface IStaffEditableInfo {
  staffFname : string,
  staffLname : string,
  salaryAmt? : number,
  staffStatus: string,
  designation: string,
  staffPhNo : string,
  staffAddress : string,
  staffEmail : string,
  joiningDate: Date,
  leavingDate: Date,
  salaryType : string,

  roles: IRole[] ;


  }
export interface IRole {
  role1 : string,
  projID: number
}

export interface IStaffPaged {
  pageNumber: number,
  pageSize: number,
  totalPages: number,
  totalRecords: number,
  firstPage: Url,
  lastPage: Url,
  nextPage: Url,
  previousPage: Url,
  data: IStaffInfo[],
  succeeded: boolean
}
export interface IAddStaff{
  staffFname : string,
  staffLname : string,
  salaryAmt? : number,
  staffStatus: string,
  designation: string,
  staffPhNo : string,
  staffAddress : string,
  staffEmail : string,
  joiningDate: Date,
  salaryType : string,
  roles: IRole[] ;

}
