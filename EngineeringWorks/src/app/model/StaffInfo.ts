import { SalaryType } from '../Enums/enums';
import { IRole, IStaffInfo } from './IStaff';
import { Role } from './Role';
export class StaffInfo implements IStaffInfo {
  staffID: number;
  staffFName: string;
  staffLName: string;
  salary?: number;
  designation: string;
  staffStatus: string;
  staffPhNo: string;
  staffAddress: string;
  staffEmail: string;
  joiningDate: Date;
  leavingDate: Date;
  salaryType: SalaryType;
  roles: IRole[] = [new Role()];
}
