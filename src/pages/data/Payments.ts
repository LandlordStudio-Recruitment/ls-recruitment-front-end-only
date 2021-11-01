import { Payment } from "./Payment";

export class Payments {
  static instance: Payment[] = [
    {
      id: '95dd3547-7520-451e-aa81-f52c1168bec4',
      dueDate: new Date('2021-06-28'),
      status: 'Unpaid',
      category: 'Bond',
      description: 'Bond for 8024 Via Pompeii',
      amount: 112000
    },
    {
      id: '27f69c9f-c38d-41bd-a329-ba2fd5d379a7',
      dueDate: new Date('2021-08-22'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 4434
    },
    {
      id: 'b9d32b35-0fac-4e07-86d0-035ec5a0e360',
      dueDate: new Date('2021-09-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '5efb1c91-e707-4fd7-ba62-672bb08f02ae',
      dueDate: new Date('2021-09-07'),
      status: 'Unpaid',
      category: 'Late Fee',
      description: 'Late Fee for 8024 Via Pompeii',
      amount: 10
    },
    {
      id: '4caaf72a-344b-4b38-a06d-df39c6d5b35d',
      dueDate: new Date('2021-09-27'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 3922
    },
    {
      id: 'dfe009cc-fbc1-4464-8259-d67bdda43bad',
      dueDate: new Date('2021-10-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '5464c269-39e1-432d-8a4e-b8bf9234a8a0',
      dueDate: new Date('2021-10-16'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 4121
    },
    {
      id: '648ac7c9-68e6-4eab-8b4e-abf4dde21ca3',
      dueDate: new Date('2022-04-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '9082a0e2-f867-421a-a529-72b221c7d6a6',
      dueDate: new Date('2022-05-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: 'ad498375-1581-42d7-b64c-90da7f49d2c6',
      dueDate: new Date('2022-06-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10700
    },
    {
      id: '3243e5a5-3a46-42e9-9c5d-62cdfe0b5b58',
      dueDate: new Date('2021-03-01'),
      status: 'Paid',
      category: 'Security Deposit',
      description: 'Security deposit for 8024 Via Pompeii',
      amount: 9750
    },
    {
      id: 'e71268b4-6521-47de-a071-1fd87b1b5e26',
      dueDate: new Date('2021-04-01'),
      status: 'Paid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10250
    },
    {
      id: 'da939578-6bf4-4a86-8750-12facfe7b470',
      dueDate: new Date('2021-06-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10250
    },
    {
      id: 'c45a1e7f-914b-49a4-9493-36d960f2b879',
      dueDate: new Date('2021-07-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10250
    },
    {
      id: '5e8a8427-8e14-4320-8778-0be185f38783',
      dueDate: new Date('2021-07-13'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 3867
    },
    {
      id: 'c1ebcea1-fb63-459f-b5ad-8d0e0ca06a09',
      dueDate: new Date('2021-08-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10250
    },
    {
      id: '74f8c5fa-5dd8-4c87-9915-0059e02fcc84',
      dueDate: new Date('2021-11-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '23a2244d-0c25-4b98-b606-9fc2dcdc239a',
      dueDate: new Date('2021-11-11'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 4501
    },
    {
      id: '8072279e-b18d-4b4c-baa4-e7cc36372a4e',
      dueDate: new Date('2021-12-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: 'dab8cc50-f1c6-4a32-b4f4-e47154dd6f76',
      dueDate: new Date('2022-01-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '88585b54-9dae-4486-9ae3-613ee881af51',
      dueDate: new Date('2022-01-05'),
      status: 'Unpaid',
      category: 'Late Fee',
      description: 'Late fee for 8024 Via Pompeii',
      amount: 10
    },
    {
      id: '790e0526-085b-43b1-b7b7-ba71ae580921',
      dueDate: new Date('2022-02-01'),
      status: 'Unpaid',
      category: 'Rent',
      description: 'Rent for 8024 Via Pompeii',
      amount: 10400
    },
    {
      id: '35cbca2b-ce4d-4212-9f68-006f14686672',
      dueDate: new Date('2022-02-19'),
      status: 'Unpaid',
      category: 'Utilities',
      description: 'Water bill for 8024 Via Pompeii',
      amount: 4388
    },
    {
    id: '34b00872-a4a1-4a26-ba4e-1552b654806a',
    dueDate: new Date('2022-03-01'),
    status: 'Unpaid',
    category: 'Rent',
    description: 'Rent for 8024 Via Pompeii',
    amount: 10400
  }];
}