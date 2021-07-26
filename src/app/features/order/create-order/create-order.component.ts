import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { Order } from '../order';
import { OrderService } from '../order.service';

@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderDetails=null;
  orderToUpdate={
      
  id: "",   
  orderType: "",
  orderDate: "",
  amount: "",
  description: "",
  startdate: "",
  finishdate: "",
  customeremailid: "",
  deliveryDate: "",
  budget: "",
  interested: "",
  comment: ""

  };

  public validationOptions:any = {


    // Rules for form validation
    rules: {
      amount: {
        required: true
      },
      customeremailid: {
        required: true,
        customeremailid: true
      },
      orderType: {
        required: true
      },
      orderDate: {
        required: true
      },
      deliveryDate: {
        required: true
      },
      description: {
        required: true
      },
      interested: {
        required: true
      },
      budget: {
        required: true
      }
    },

    // Messages for form validation
    messages: {
      amount: {
        required: 'Please enter the amount'
      },
      customeremailid: {
        required: 'Please enter your email address',
        customeremailid: 'Please enter a VALID email address'
      },
      orderType: {
        required: 'Please enter the type of order'
      },
      interested: {
        required: 'Please select interested service'
      },
      budget: {
        required: 'Please select your budget'
      },
      orderDate: {
        required: 'Please enter the order date'
      },
      deliveryDate: {
        required: 'Please enter the expected delivery date'
      },
      description: {
        required: 'Please describe your order here'
      }
    }

  };

  
  constructor(private orderService: OrderService,
    private router: Router) {
      this.getOrdersDetails();
     }

  ngOnInit() {
  }
  register(registerForm: NgForm) {
    this.orderService.registerOrder(registerForm.value).subscribe(resp=>
    { 
        console.log(resp);
        registerForm.reset();
        this.getOrdersDetails();
    },
    (err)=>{
        console.log(err);
    }
    );


  


  }
  getOrdersDetails(){
      this.orderService.getOrders().subscribe(
          (resp)=>{
              console.log(resp);
              this.orderDetails=resp;
          },
          (err)=>{
              console.log(err);
          }
      );
  }
  deleteOrder(order){
      this.orderService.deleteOrder(order.id).subscribe(
          (resp)=>{
              console.log(resp);
              this.getOrdersDetails();
          },
          (err)=>{console.log(err)
          }
      );
  }
  edit(order){
      this.orderToUpdate=order;

  }
  updateOrder(){
      this.orderService.updateOrder(this.orderToUpdate).subscribe(
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


