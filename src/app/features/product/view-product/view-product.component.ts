import { Component, Injectable, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Product } from '../product';
import { NgserviceService } from '../ngservice.service';

@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product=new Product();
   
 

  constructor(private _activatedRoute: ActivatedRoute,private _route: Router,
    private _service: NgserviceService,
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
  
  gotolist(){
    console.log('go back');
    this._route.navigate(['product-list']);
  }

  
  

 


 
  

}
