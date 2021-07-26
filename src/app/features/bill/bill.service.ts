import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseURL="http://localhost:8080/api/v1/bills";

  constructor(private httpClient: HttpClient) { }
  getBillsList():Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(`${this.baseURL}`);
  }

  createBill(bill: Bill): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, bill);

  }

  getBillById(id: number):Observable<Bill>{
    return this.httpClient.get<Bill>(`${this.baseURL}/${id}`);
  }

  updateBill(id: number,bill:Bill):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,bill);
}
deleteBill(id: number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
