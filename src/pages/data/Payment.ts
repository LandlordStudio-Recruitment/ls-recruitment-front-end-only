import { PaymentStatus } from "./PaymentStatus";

export type Payment = {
  id: string,
  dueDate: Date,
  status: PaymentStatus,
  category: string,
  description: string,
  amount: number
}