import { Url } from "url";

export interface IProject {
  projID: number,
  projName: string,
  orderID: number,
  projDescription: string,
  projStatus: number,
  projStartDate: Date,
  projDueDate:Date,
  images? : string,
  video? : string,
  show? : boolean,
  site: string
}
export interface IAddProject {
  projName: string,
  orderID: number,
  projDescription: string,
  projStatus: number,
  projStartDate: Date,
  projDueDate:Date,
  images? : string,
  video? : string,
  show? : boolean,
  site: string
}
export interface IShowProject {
  projName: string,
  projDescription: string,
  projStatus: number,
  images? : string,
  video? : string,
  site: string
}
export interface IProjectPaged {
  pageNumber: number,
  pageSize: number,
  totalPages: number,
  totalRecords: number,
  firstPage: Url,
  lastPage: Url,
  nextPage: Url,
  previousPage: Url,
  data: IShowProject[],
  succeeded: boolean
}
