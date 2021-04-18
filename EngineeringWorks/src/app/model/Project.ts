import { IProject } from 'src/app/model/iProject';

export class Project implements IProject {
  id: number;
  name: string;
  orderId: string;
  detail: string;
  status: number;
  startDate: string;
  finishDate:string;
  image? : string;
  video? : string;
  show: number;
}

