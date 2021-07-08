import { SalaryType } from './../Enums/enums';
export interface IStaffInfo {
staffID : number,
staffFName : string,
staffLName : string,
salary? : number,
designation: string,
staffStatus: string,
staffPhNo : string,
staffAddress : string,
staffEmail : string,
joiningDate: Date,
leavingDate: Date,
salaryType : SalaryType,

roles: IRole[]


}
export interface IStaffEditableInfo {
  staffFName : string,
  staffLName : string,
  salaryAmt? : number,
  designation: string,
  staffPhNo : string,
  staffAddress : string,
  staffEmail : string,
  joiningDate: Date,
  leavingDate: Date,
  salaryType : SalaryType,

  roles: IRole[]


  }
export interface IRole {
roleName : string,
projectId: number
}


