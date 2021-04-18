export interface IPayment {
  paymentId: number,
  paymentType: string,
  paymentDate: Date,
  paymentAmt: Float32Array,
  projId: number
}
