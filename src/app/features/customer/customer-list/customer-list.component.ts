import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Injectable({
  providedIn:'root'
  })



@Component({
  selector: 'sa-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {


}
}
