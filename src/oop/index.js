class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1,"12345");
customer.name="ebru"
console.log(customer.id)
console.log(customer.customerNumber)

Customer.bisey="Bişey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{

}