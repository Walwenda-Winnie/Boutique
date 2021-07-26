import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) { }

  API='http://localhost:8080';
  public registerCustomer(customerData){
      return this.http.post(this.API+'/registerCustomer', customerData);
  }

  public getCustomers(){
      return this.http.get(this.API+'/getCustomers');
  }
  public deleteCustomer(id){
      return this.http.delete(this.API +'/deleteCustomer?id='+id);

  }
  public updateCustomer(customer){
      return this.http.put(this.API +'/updateCustomer',customer);
  }
}