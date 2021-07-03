export interface IProject {
  id: number,
  name: string,
  orderId: number,
  detail: string,
  status: number,
  startDate: string,
  finishDate:string,
  image? : string,
  video? : string,
  show : number
}
export interface IAddProject {
  name: string,
  orderId: number,
  detail: string,
  status: number,
  startDate: string,
  finishDate:string,
  image? : string,
  video? : string,
  show : number
}

