import { CustomerDto } from "../dto/CustomerDto.js";

export let customers = [
  new CustomerDto('C00-001', 'Sadun Malaka', 'No17, Panadura', 100.00),
  new CustomerDto('C00-002', 'Ramal Wasuka', 'Panadura', 200.00)
];

export let items = [
  {
      itemCode : 'I001',
      itemName : 'Biscuits',
      itemQty : 50,
      itemPrice : 110
  },

  {
      itemCode : 'I002',
      itemName : 'Chocolate',
      itemQty : 24,
      itemPrice : 55
  }
];

export let orders = [];