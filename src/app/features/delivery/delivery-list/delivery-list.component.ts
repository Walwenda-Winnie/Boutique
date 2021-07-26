import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeliveryService } from '../delivery.service';


@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  isActivated:boolean;
  delivery: any;
  private sub: Subscription;
    deliveryDetails=null;
    deliveryToUpdate={
        
    id: "",   
    saleId: "",
    firstName: "",
    lastName: "",
    deliveryEmployeeName: "",
    meansofDelivery:"",
    address: "",
    status: "",
    saleDate: "",
    locations: "",
     email: "",
     schedule: "",
     notScheduled: "",
     shipped: "",
     delivered: ""

    };


 

  constructor(
    private router: Router, private deliveryService: DeliveryService) { 
        this.getDeliveriesDetails();
    }
    ngOnInit(): void {
        
    }
    register(registerForm: NgForm) {
        this.deliveryService.registerDelivery(registerForm.value).subscribe(resp=>
        { 
            console.log(resp);
            registerForm.reset();
            this.getDeliveriesDetails();
        },
        (err)=>{
            console.log(err);
        }
        );

   
      


      }
      getDeliveriesDetails(){
          this.deliveryService.getDeliveries().subscribe(
              (resp)=>{
                  console.log(resp);
                  this.deliveryDetails=resp;
              },
              (err)=>{
                  console.log(err);
              }
          );
      }
      deleteDelivery(delivery){
          this.deliveryService.deleteDelivery(delivery.id).subscribe(
              (resp)=>{
                  console.log(resp);
                  this.getDeliveriesDetails();
              },
              (err)=>{console.log(err)
              }
          );
      }
      edit(delivery){
          this.deliveryToUpdate=delivery;

      }
      updateDelivery(){
          this.deliveryService.updateDelivery(this.deliveryToUpdate).subscribe(
              (resp)=>{
                  console.log(resp);
              },
              (err)=>{
                  console.log(err);
              }
          );
      }
      onScheduled() {
        this.deliveryService.onScheduled()
      }
      onToggle() {
        this.isActivated = !this.isActivated
      }
    
    
    
      onNotScheduled() {
        this.deliveryService.onNotScheduled()
      }
    
    
      onShipped() {
        this.deliveryService.onShipped()
      }
    
    
      onDelivered() {
        this.deliveryService.onDelivered()
      }
      factoryReset() {
        this.deliveryService.factoryReset()
      }
    




}




function resp(resp: any) {
    throw new Error('Function not implemented.');
}

