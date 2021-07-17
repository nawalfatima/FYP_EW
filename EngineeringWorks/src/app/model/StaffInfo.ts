import { SalaryType } from '../Enums/enums';
import { IRole, IStaffInfo } from './IStaff';
import { Role } from './Role';
export class StaffInfo implements IStaffInfo {
  staffID: number;
  staffFname: string;
  staffLname: string;
  salaryAmt?: number;
  designation: string;
  staffStatus: string;
  staffPhNo: string;
  staffAddress: string;
  staffEmail: string;
  joiningDate: Date;
  leavingDate: Date;
  salaryType: string;
  roles: IRole[] = [new Role()];
}
