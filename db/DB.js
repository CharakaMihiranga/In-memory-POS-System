import { CustomerDto } from "../dto/CustomerDto.js";
import { ItemDto } from "../dto/ItemDto.js";

export let customers = [
  new CustomerDto('C00-001', 'Sadun Malaka', 'No17, Panadura', 100.00),
  new CustomerDto('C00-002', 'Ramal Wasuka', 'Panadura', 200.00)
];

export let items = [
  new ItemDto('I00-001', 'Lux Soap', 100, 48),
  new ItemDto('I00-002', 'Canned Mackerel ', 300, 150),
  new ItemDto('I00-003', 'Anchor Milk Powder', 850, 340)
];

export let orders = [];