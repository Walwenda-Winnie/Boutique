import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../product';
import { NgserviceService} from '../ngservice.service';
@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  _productlist:Product[];

  
  
  

  constructor(private _service: NgserviceService, private _route: Router
    ) { }

  ngOnInit(): void {
    this._service.fetchproductListFromRemote().subscribe(
      data=>
        console.log("response received"),
      error=>console.log("exception occured")
    )
  }
  goToAddProduct(){
    this._route.navigate(['/add-product']);
  }
  goToEditProduct(id: number){
    console.log("id"+id);
    this._route.navigate(['/edit-product',id]);
  }
  goToViewProduct(id: number){
    console.log("id"+id);
    this._route.navigate(['/view-product',id]);

  }
  deleteProduct(id: number){
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
        this._route.navigate(['/product-list']);
      },
      error=>console.log("Exception occured")
    )

  }

}
