import { Url } from "url";

export interface IPaginatedResponse {
  pageNumber: number,
  pageSize: number,
  totalPages: number,
  totalRecords: number,
  firstPage: Url,
  lastPage: Url,
  nextPage: Url,
  previousPage: Url,
  data: [{}],
  succeeded: boolean
}
