export class CustomerDto {
  constructor(id = null, name = '', address = '', salary = 0) {

    // if(){

    //   this._id = id;
    //   this._name = name;
    //   this._address = address;
    //   this._salary = salary;
      
    // }

  
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get address() {
    return this._address;
  }

  get salary() {
    return this._salary;
  }

  set id(value) {

      this._id = value;
   
  }

  set name(value) {
   
      this._name = value;
  
  }

  set address(value) {
   
      this._address = value;
   
  }

  set salary(value) {
  
      this._salary = value;
  
  }

  toString() {
    return `Customer { id: ${this._id}, name: ${this._name}, address: ${this._address}, salary: ${this._salary} }`;
  }
}
