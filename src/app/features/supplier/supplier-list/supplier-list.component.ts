import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';


@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
    supplierDetails=null;
    supplierToUpdate={
        
    id: "",   
    personId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    location: "",
    supplyDate: "",
    status: "",
    email: ""

    };


 

  constructor(
    private router: Router, private supplierService: SupplierService) { 
        this.getSuppliersDetails();
    }
    ngOnInit(): void {
        
    }
    register(registerForm: NgForm) {
        this.supplierService.registerSupplier(registerForm.value).subscribe(resp=>
        { 
            console.log(resp);
            registerForm.reset();
            this.getSuppliersDetails();
        },
        (err)=>{
            console.log(err);
        }
        );

   
      


      }
      getSuppliersDetails(){
          this.supplierService.getSuppliers().subscribe(
              (resp)=>{
                  console.log(resp);
                  this.supplierDetails=resp;
              },
              (err)=>{
                  console.log(err);
              }
          );
      }
      deleteSupplier(supplier){
          this.supplierService.deleteSupplier(supplier.id).subscribe(
              (resp)=>{
                  console.log(resp);
                  this.getSuppliersDetails();
              },
              (err)=>{console.log(err)
              }
          );
      }
      edit(supplier){
          this.supplierToUpdate=supplier;

      }
      updateSupplier(){
          this.supplierService.updateSupplier(this.supplierToUpdate).subscribe(
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

