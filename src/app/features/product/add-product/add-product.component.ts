import { Component, Injectable, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import { Product } from '../product';
import { NgserviceService } from '../ngservice.service';
@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product=new Product();
  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit() {
  }

  addProductformsubmit(adduserform: NgForm){

    this._service.addproductToRemote(adduserform.value).subscribe(resp=>
      { 
          console.log("Message form the back end",resp);
          
          adduserform.reset();
          //this.getCustomersDetails();
      },
      (err)=>{
          console.log(err);
      }
      );
  }

  gotolist(){
    console.log('go back');
    this._route.navigate(['product-list']);
  }
  
  
}
