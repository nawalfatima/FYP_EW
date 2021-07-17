import { SalaryType } from '../Enums/enums';
import { IAddStaff, IRole } from './IStaff';
export class AddStaff implements IAddStaff {
  staffStatus: string;
  staffFname: string;
  staffLname: string;
  salaryAmt?: number;
  designation: string;
  staffPhNo: string;
  staffAddress: string;
  staffEmail: string;
  joiningDate: Date;
  salaryType: string;
  roles: IRole[];
}
