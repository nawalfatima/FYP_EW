import { IShowProject } from 'src/app/model/iProject';
import { Url } from "url";
import { IProjectPaged } from "./iProject";
import { ShowProject } from "./Project";

export class ProjectPaged implements IProjectPaged {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
    firstPage: Url;
    lastPage: Url;
    nextPage: Url;
    previousPage: Url;
    data:IShowProject[] = [new ShowProject()];
    succeeded: boolean;
}
