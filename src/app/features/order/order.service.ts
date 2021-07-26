import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) { }

  API='http://localhost:8080';
  public registerOrder(orderData){
      return this.http.post(this.API+'/registerOrder', orderData);
  }

  public getOrders(){
      return this.http.get(this.API+'/getOrders');
  }
  public deleteOrder(id){
      return this.http.delete(this.API +'/deleteOrder?id='+id);

  }
  public updateOrder(order){
      return this.http.put(this.API +'/updateOrder',order);
  }
}