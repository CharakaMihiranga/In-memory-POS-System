import { customers,items } from '../db/DB.js';
import { CustomerDto } from '../dto/CustomerDto.js';



export function getAllCustomers(){
  return customers;
}

export function AddCustomer(customer){

  if (customer instanceof CustomerDto){
    customers.push(customer);
  } else {
    throw new Error ('Invalid Customer');
  }

}

export function RemoveCustomer(id){
  const index = customers.findIndex(customer => customer.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
  }
}

export function isCustomerExist(id){
  return customers.find(customer => customer.id === id) !== undefined;
}

export function UpdateCustomer(updateCustomer){
  const index = customers.findIndex(customer => customer.id === updateCustomer.id);
  if (index !== -1) {
    customers[index] = updateCustomer;
  } else {
    throw new Error('Customer not found');
  }
}

