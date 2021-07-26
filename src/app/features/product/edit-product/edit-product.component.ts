import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Subscription } from 'rxjs';
import { Product } from '../product';
import { NgserviceService } from '../ngservice.service';
@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  product=new Product();
   
 

  constructor(private _activatedRoute: ActivatedRoute,private _route: Router,
    private _service: NgserviceService
    ) { }

  ngOnInit() {

    let id=parseInt (this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data=>{
        console.log("data received");
        this.product=data;
      },
      error=>console.log("exception occured")
    )
  }
  updateProductformsubmit(){
    this._service.addproductToRemote(this.product).subscribe
    (
      data=>{
      console.log("data added successfully");
      this._route.navigate(['product-list']);
    },
    error=>console.log(error)

    )

 
  }
  gotolist(){
    console.log('go back');
    this._route.navigate(['product-list']);
  }
}
