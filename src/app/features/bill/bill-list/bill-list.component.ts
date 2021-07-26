import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'sa-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  bills!: Bill[];

  constructor(private billService: BillService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBills();


  }
  private getBills(){
    this.billService.getBillsList().subscribe(data=>{
      this.bills=data;
    });
  }

  billDetails(id:number){
    this.router.navigate(['bill-details', id]);
  }

  updateBill(id: number){
    this.router.navigate(['update-bill', id]);

  }
  deleteBill(id: number){
    this.billService.deleteBill(id).subscribe(data=>{
      console.log(data);
      this.getBills();
    })

  }
}
