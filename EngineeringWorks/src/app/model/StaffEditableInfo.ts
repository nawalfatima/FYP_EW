import { IRole, IStaffEditableInfo } from 'src/app/model/IStaff';
import { SalaryType } from '../Enums/enums';
export class StaffEditableInfo implements IStaffEditableInfo {
  staffFName: string;
  staffLName: string;
  salaryAmt?: number;
  designation: string;
  staffPhNo: string;
  staffAddress: string;
  staffEmail: string;
  joiningDate: Date;
  leavingDate: Date;
  salaryType: SalaryType;
  roles: IRole[];

}
