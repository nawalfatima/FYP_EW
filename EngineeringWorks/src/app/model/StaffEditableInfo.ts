import { IRole, IStaffEditableInfo } from 'src/app/model/IStaff';
import { SalaryType } from '../Enums/enums';
import { Role } from './Role';
export class StaffEditableInfo implements IStaffEditableInfo {
  staffFname: string;
  staffLname: string;
  staffStatus: string;
  salaryAmt?: number;
  designation: string;
  staffPhNo: string;
  staffAddress: string;
  staffEmail: string;
  joiningDate: Date;
  leavingDate: Date;
  salaryType: string;
  roles: IRole[] = [new Role()];

}
