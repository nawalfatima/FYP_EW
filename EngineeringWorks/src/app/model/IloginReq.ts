export interface IloginReq {
  username: string;
  password: string;
}

export interface IloginReqForm {
  username: string;
  password: string;
role: string;
}

export interface IloginRes {
  username: string;
  name: string;
  address:string;
  mobile: string;
  cnic: string;
  email: string;
  token: string;

}
