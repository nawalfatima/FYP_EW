import { IStaffInfo } from 'src/app/model/IStaff';
import { Url } from "url";
import { IStaffPaged } from "./IStaff";
import { StaffInfo } from './StaffInfo';

export class StaffPaged implements IStaffPaged {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  firstPage: Url;
  lastPage: Url;
  nextPage: Url;
  previousPage: Url;
  data: any[] = [new StaffInfo()];
  succeeded: boolean;
}
