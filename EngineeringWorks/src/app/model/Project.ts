import { IProject, IProjectPaged, IShowProject } from 'src/app/model/iProject';
import { Url } from 'url';

export class Project implements IProject {
  projID: number;
  projName: string;
  orderID: number;
  projDescription: string;
  projStatus: number;
  projStartDate: Date;
  projDueDate: Date;
  images?: string;
  video?: string;
  show?: boolean;
  site: string;

}
export class ShowProject implements IShowProject {
  projName: string;
  projDescription: string;
  projStatus: number;
  images?: string;
  video?: string;
  site: string;
}



