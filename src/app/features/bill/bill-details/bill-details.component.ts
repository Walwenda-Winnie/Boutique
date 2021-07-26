import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';


@Component({
  selector: 'sa-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  id!: number;
  bill!: Bill;


  constructor(private route: ActivatedRoute, private billService:    BillService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.bill=new Bill();
    this.billService.getBillById(this.id).subscribe(data=>{
      this.bill=data;

    });
  }

}
