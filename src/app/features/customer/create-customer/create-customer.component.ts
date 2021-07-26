import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
    customerDetails=null;
    customerToUpdate={
        
    id: "",   
    personId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    location: "",
    zip: "",
    country: "",
    accountNumber: "",
    email: "",
    balance: ""

    };
  constructor(
    private router: Router, private customerService: CustomerService) { 
        this.getCustomersDetails();
    }
    ngOnInit(): void {
        
    }

    register(registerForm: NgForm) {
        this.customerService.registerCustomer(registerForm.value).subscribe(resp=>
        { 
            console.log(resp);
            registerForm.reset();
            this.getCustomersDetails();
        },
        (err)=>{
            console.log(err);
        }
        );
      }
      
      getCustomersDetails(){
          this.customerService.getCustomers().subscribe(
              (resp)=>{
                  console.log(resp);
                  this.customerDetails=resp;
              },
              (err)=>{
                  console.log(err);
              }
          );
      }
      deleteCustomer(customer){
          this.customerService.deleteCustomer(customer.id).subscribe(
              (resp)=>{
                  console.log(resp);
                  this.getCustomersDetails();
              },
              (err)=>{console.log(err)
              }
          );
      }
      edit(customer){
          this.customerToUpdate=customer;

      }
      updateCustomer(){
          this.customerService.updateCustomer(this.customerToUpdate).subscribe(
              (resp)=>{
                  console.log(resp);
              },
              (err)=>{
                  console.log(err);
              }
          );
      }
    




}




function resp(resp: any) {
    throw new Error('Function not implemented.');
}

