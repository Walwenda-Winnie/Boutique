import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Sale} from '../sale';
import { SaleService} from '../sale.service';
@Injectable({
  providedIn:'root'
  })

@Component({
  selector: 'sa-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  sales: Sale[];

  constructor(private saleService: SaleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSales();

   
  }
  private getSales(){
    this.saleService.getSalesList().subscribe(data=>{
      this.sales =data;

    });
  }

  saleDetails(id: number){
    this.router.navigate(['sale-details', id]);

  }
  updateSale(id: number){
    this.router.navigate(['update-sale', id]);

  }  
  deleteSale(id: number){
    this.saleService.deleteSale(id).subscribe(data=>{
      console.log(data);
      this.getSales();
    })

  }

}
