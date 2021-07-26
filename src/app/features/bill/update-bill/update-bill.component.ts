import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'sa-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {
  id!: number;

  bill: Bill=new Bill();

  constructor(private billService: BillService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.billService.getBillById(this.id).subscribe(data=>{
      this.bill=data;
    }, error=>console.log(error));
  }
  onSubmit(){
    this.billService.updateBill(this.id,this.bill).subscribe(data=>{
      this.goToBillList();
    },error=>console.log(error));
    
  }

  goToBillList(){
    this.router.navigate(['/bills']);



}
}
