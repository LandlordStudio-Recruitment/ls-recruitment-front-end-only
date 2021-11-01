import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse } from '../../ErrorResponse'
import { Payments } from '../../../data/Payments'
import { delay } from '../../delay';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  if (req.method === 'PATCH') {
    await delay(1000);

    var payment = Payments.instance.find(p => p.id === req.query.paymentId);

    if (payment) {
      if (payment.amount > 100000) {
        res.status(402).json({ message: 'Insufficient funds for payment' });
      }
      else {
        payment.status = 'Paid';
        res.status(204).end();
      }
    }
    else {
      res.status(404).json({ message: 'The requested resource could not be found' });
    }
  }
  else {
    res.status(404).json({ message: 'The requested resource could not be found' });
  }
}
